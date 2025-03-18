import React, { useEffect, useState, useCallback } from "react";
import {
  EditorState,
  convertFromRaw,
  ContentBlock,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { formatDate } from "@/utils/format-date";
import QuoteIcon from "@/public/assets/quote-icon.png";
import { Badge } from "@/components/ui/badge";
import { BlogData } from "@/shared/type";
import FeedbackComponent from "../blog-feedback/blog-feedback";

// Component tùy chỉnh để hiển thị hình ảnh
const ImageComponent = (props: any) => {
  const { block, contentState } = props;
  const entityKey = block.getEntityAt(0);

  if (!entityKey) return null;

  const entity = contentState.getEntity(entityKey);
  const { src, alt, caption, width, height } = entity.getData();

  return (
    <figure className="blog-image-container my-8">
      <Image
        src={src || "/placeholder-image.jpg"}
        alt={alt || "Blog image"}
        width={width || 800}
        height={height || 400}
        className="rounded-lg"
      />
      {caption && <figcaption className="text-sm text-gray-500 text-center mt-2">{caption}</figcaption>}
    </figure>
  );
};

const DivBorderLeft = (props: { block?: ContentBlock }) => {
  const { block } = props;

  // Kiểm tra nếu block không tồn tại thì không render gì cả
  if (!block) return null;

  // Lấy text từ block
  const text = block.getText();

  // Kiểm tra nếu text rỗng thì không render
  if (!text.trim()) return null;

  return (
    <div className="border-l-2 border-green-500 pl-8 py-4 my-4 italic">
      {text}
    </div>
  );
};

const DivQuote = (props: { block?: ContentBlock }) => {
  const { block } = props;

  // Kiểm tra nếu block không tồn tại thì không render gì cả
  if (!block) return null;

  // Lấy text từ block
  const text = block.getText();

  // Kiểm tra nếu text rỗng thì không render
  if (!text.trim()) return null;

  return (
    <div className="relative">
      <div className="w-4/5 mx-auto pl-8 py-4 my-4 italic text-center text-gray-500 dark:text-gray-400">
        {text}
      </div>
      <Image
        src={QuoteIcon}
        alt="Quote icon"
        width={40}
        height={40}
        className="absolute top-0 left-[8%]"
      />
    </div>
  );
}

const HeaderRenderer = (props: { block: ContentBlock }) => {
    const { block } = props;
    // Kiểm tra nếu block không tồn tại thì không render gì cả
    if (!block) return null;

    // Lấy text từ block
    const text = block.getText();
  
    // Kiểm tra nếu text rỗng thì không render
    if (!text.trim()) return null;
  return (
    <h2 id={`header-${block.getKey()}`} key={block.getKey()} className="mt-4 mb-2 text-xl font-bold text-green-500">
      {text}
    </h2>
  );
}

const DraftRenderer = ({ editorState }: { editorState: EditorState }) => {
  const customStyleMap = {
    GREEN_TEXT_BOLD: {
      color: "#00c761",
      fontWeight: "bold",
    },
  };

  // Custom block renderer function
  const blockRenderer = useCallback((block: ContentBlock) => {
      if (block.getType() === "heading-two" || block.getType() === "heading-three") {
      return {
        component: HeaderRenderer,
        editable: false,
      };
      }
    
    if (block.getType() === "atomic") {
      return {
        component: ImageComponent,
        editable: false,
      };
    }
    if (block.getType() === "border-l") {
      return {
        component: DivBorderLeft,
        editable: false,
      };
    }
    if (block.getType() === "quote") {
      return {
        component: DivQuote,
        editable: false,
      };
    }

    return null;
  }, []);

  return (
    <Editor
      editorState={editorState}
      readOnly={true}
      toolbarHidden={true}
      blockRendererFn={blockRenderer}
      wrapperClassName="blog-wrapper"
      editorClassName="blog-editor"
      customStyleMap={customStyleMap}
    />
  );
};


export default function BlogViewer({
  blogId = "5s-process-article",
  dataBlog
}: {
  dataBlog: any;
  blogId?: string;
}) {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [editorState, setEditorState] = useState<EditorState | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // const blogService = {
  //   getBlog: async (id: string): Promise<BlogData> => {
  //     // Thực tế sẽ gọi API tại đây
  //     return data;
  //   },
  // };
  

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        // const data = await blogService.getBlog(blogId);

        setBlogData(dataBlog);

        // Xử lý các entity nếu cần
        if (!dataBlog.content.entityMap) {
          dataBlog.content.entityMap = {};
        }

        // Chuyển đổi raw content từ JSON thành EditorState
        const contentState = convertFromRaw(dataBlog.content);
        setEditorState(EditorState.createWithContent(contentState));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError("Không thể tải bài viết. Vui lòng thử lại sau.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading)
    return (
      <div className="blog-loading">
        <div className="spinner"></div>
        <p>Đang tải bài viết...</p>
      </div>
    );

  if (error)
    return (
      <div className="blog-error">
        <h2>Có lỗi xảy ra</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Thử lại</button>
      </div>
    );

  if (!blogData || !editorState) return null;

  return (
    <div className="blog-viewer">
      <div className="blog-header">
            <div>
              <Badge variant="info">{blogData.category}</Badge>
            </div>
        <h1 className="text-4xl font-bold my-4">{blogData.title}</h1>
        
        <div className="flex flex-row items-center justify-between gap-4 text-gray-500">
          <div className="flex flex-row gap-4">
            <Image
              src={blogData.avatar}
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="text-sm">Tác giả</div>
              <div className="text-sm font-semibold text-black dark:text-green-700">{blogData.author}</div>
            </div>
          </div>
          <div className="flex flex-row gap-8 items-center pr-4 text-gray-500 dark:text-gray-400">
              <div className="text-sm flex flex-row gap-2 border-r-2 pr-8">
                <Calendar size={16} />
                {formatDate(blogData.createdAt)}
              </div>
              <div className="text-sm flex flex-row gap-2">
                <Clock size={16} />
                {blogData.readTime} phút đọc
              </div>
            </div>
          </div>
      </div>
      <DraftRenderer editorState={editorState} />
      <FeedbackComponent />
    </div>
  );
}
