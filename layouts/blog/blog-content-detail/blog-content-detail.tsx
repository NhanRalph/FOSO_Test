import React, { useEffect, useState, useCallback, useRef } from "react";
import { EditorState, convertFromRaw, ContentBlock } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { formatDate } from "@/utils/format-date";
import QuoteIcon from "@/public/assets/quote-icon.png";
import { Badge } from "@/components/ui/badge";
import { BlogData } from "@/shared/type";
import FeedbackComponent from "../blog-feedback/blog-feedback";
import { motion } from "framer-motion";

// Component tùy chỉnh để hiển thị hình ảnh
interface ImageComponentProps {
  block: ContentBlock;
  contentState: any; // Replace 'any' with the specific type if available
}

// Animate on scroll hook
const useAnimateOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
};

// Animate on scroll component
const AnimateOnScroll = ({ children, delay = 0, yOffset = 50 }) => {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.5, delay }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

const ImageComponent = (props: ImageComponentProps) => {
  const { block, contentState } = props;
  const entityKey = block.getEntityAt(0);
  const { ref, isVisible } = useAnimateOnScroll();

  if (!entityKey) return null;

  const entity = contentState.getEntity(entityKey);
  const { src, alt, caption, width, height } = entity.getData();

  return (
    <motion.figure 
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="blog-image-container my-8"
    >
      <Image
        src={src || "/placeholder-image.jpg"}
        alt={alt || "Blog image"}
        width={width || 800}
        height={height || 400}
        className="rounded-lg w-full"
      />
      {caption && (
        <figcaption className="text-sm text-gray-500 text-center mt-2">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
};

const DivBorderLeft = (props: { block?: ContentBlock }) => {
  const { block } = props;
  const { ref, isVisible } = useAnimateOnScroll();

  // Kiểm tra nếu block không tồn tại thì không render gì cả
  if (!block) return null;

  // Lấy text từ block
  const text = block.getText();

  // Kiểm tra nếu text rỗng thì không render
  if (!text.trim()) return null;

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5 }}
      className="border-l-2 border-green-500 pl-8 py-4 my-4 italic"
    >
      {text}
    </motion.div>
  );
};

const DivQuote = (props: { block?: ContentBlock }) => {
  const { block } = props;
  const { ref, isVisible } = useAnimateOnScroll();

  // Kiểm tra nếu block không tồn tại thì không render gì cả
  if (!block) return null;

  // Lấy text từ block
  const text = block.getText();

  // Kiểm tra nếu text rỗng thì không render
  if (!text.trim()) return null;

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <motion.div 
        initial={{ y: 20 }}
        animate={isVisible ? { y: 0 } : { y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-4/5 mx-auto pl-8 py-4 my-4 italic text-center text-gray-500 dark:text-gray-400"
      >
        {text}
      </motion.div>
      <motion.div
        initial={{ rotate: -10, opacity: 0 }}
        animate={isVisible ? { rotate: 0, opacity: 1 } : { rotate: -10, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image
          src={QuoteIcon}
          alt="Quote icon"
          width={40}
          height={40}
          className="absolute top-0 left-[8%]"
        />
      </motion.div>
    </motion.div>
  );
};

const HeaderRenderer = (props: { block: ContentBlock }) => {
  const { block } = props;
  const { ref, isVisible } = useAnimateOnScroll();

  // Kiểm tra nếu block không tồn tại thì không render gì cả
  if (!block) return null;

  // Lấy text từ block
  const text = block.getText();

  // Kiểm tra nếu text rỗng thì không render
  if (!text.trim()) return null;
  
  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      id={`header-${block.getKey()}`}
      key={block.getKey()}
      className="mt-4 mb-2 text-xl font-bold text-green-500"
    >
      {text}
    </motion.h2>
  );
};

const DraftRenderer = ({ editorState }: { editorState: EditorState }) => {
  const customStyleMap = {
    GREEN_TEXT_BOLD: {
      color: "#00c761",
      fontWeight: "bold",
    },
  };

  // Custom block renderer function
  const blockRenderer = useCallback((block: ContentBlock) => {
    if (
      block.getType() === "heading-two" ||
      block.getType() === "heading-three"
    ) {
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
  dataBlog,
}: {
  dataBlog: any;
  blogId?: string;
}) {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [editorState, setEditorState] = useState<EditorState | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        
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
      <div className="blog-loading flex justify-center items-center py-20">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="flex flex-col items-center"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 border-4 border-t-green-500 border-r-transparent border-b-green-500 border-l-transparent rounded-full mb-4"
          ></motion.div>
          <p>Đang tải bài viết...</p>
        </motion.div>
      </div>
    );

  if (error)
    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="blog-error flex flex-col items-center justify-center py-16"
      >
        <h2 className="text-xl font-bold mb-2">Có lỗi xảy ra</h2>
        <p className="mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Thử lại
        </button>
      </motion.div>
    );

  if (!blogData || !editorState) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="blog-viewer"
    >
      <div className="blog-header">
        <AnimateOnScroll delay={0.1} yOffset={20}>
          <div>
            <Badge variant="info">{blogData.category}</Badge>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.2} yOffset={30}>
          <h1 className="text-4xl font-bold my-4">{blogData.title}</h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} yOffset={20}>
          <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between gap-4 text-gray-500">
            <div className="flex flex-row gap-4">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Image
                  src={blogData.avatar}
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </motion.div>
              <div>
                <div className="text-sm">Tác giả</div>
                <div className="text-sm font-semibold text-black dark:text-green-700">
                  {blogData.author}
                </div>
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
        </AnimateOnScroll>
      </div>
      
      <AnimateOnScroll delay={0.5} yOffset={10}>
        <DraftRenderer editorState={editorState} />
      </AnimateOnScroll>
      
      <AnimateOnScroll delay={0.3} yOffset={20}>
        <FeedbackComponent />
      </AnimateOnScroll>
    </motion.div>
  );
}