import BlogImage from "@/public/assets/blog-img.png";
import _5sProcess1 from "@/public/assets/5s-process/5s-process-1.png";
import _5sProcess2 from "@/public/assets/5s-process/5s-process-2.png";
import _5sProcess3 from "@/public/assets/5s-process/5s-process-3.png";
import _5sProcess4 from "@/public/assets/5s-process/5s-process-4.png";
import _5sProcess5 from "@/public/assets/5s-process/5s-process-5.png";
import Avatar from "@/public/assets/logo-mini.png";
import { Blog } from "./type";
import { BlogData } from "./type";

export const blogs: Blog[] = [
  {
    title: "Tại sao BOM 123 quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-10",
    readTime: 5,
    type: "Quản lý sản xuất",
  },
  {
    title: "Tại sao BOM abc quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-10",
    readTime: 5,
    type: "Quản lý sản xuất",
  },
  {
    title: "Tại sao BOM 345 quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-11",
    readTime: 10,
    type: "Quản lý sản xuất",
  },
  {
    title: "Tại sao BOM 789 quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-12",
    readTime: 15,
    type: "Quản lý sản xuất",
  },
  {
    title: "Tại sao BOM qwe quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-13",
    readTime: 20,
    type: "Quản lý sản xuất",
  },
  {
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-14",
    readTime: 25,
    type: "Quản lý sản xuất",
  },
];

// Mock data
export const dataBlogDetail: BlogData = {
  id: "5s-process-article",
  category: "Quản Lý Sản Xuất",
  title: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
  author: "FOSO Creator",
  avatar: Avatar,
  createdAt: "2025-03-17T10:00:00Z",
  readTime: 10,
  content: {
    blocks: [
      {
        key: "image-section-0",
        text: " ",
        type: "atomic",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            key: 0,
          },
        ],
        data: {},
      },
      {
        key: "quote-section-0",
        text: "Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.",
        type: "quote",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section1",
        text: "1. Quy trình 5S là gì?",
        type: "heading-two",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section1-1",
        text: "Quy trình 5S được biết đến là mô hình quản lý tinh gọn trong sản xuất. Người gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section1-2",
        text: "Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này hướng đến 5 nội dung tiếng Nhật:",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "list1-1",
        text: "Seiri (Ngăn nắp)",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 6,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "list1-2",
        text: "Seiso (Sạch sẽ)",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 6,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "list1-3",
        text: "Seiton (Trật tự)",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 6,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "list1-4",
        text: "Shitsuke (Kỷ luật)",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 8,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "list1-5",
        text: "Seiketsu (Tiêu chuẩn hóa)",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 8,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section2",
        text: "2. Lợi ích quy trình 5S đem lại",
        type: "heading-two",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section2-1",
        text: "Quy trình 5S được xét hạp lý ở chỗ ở nơi nào chủ 5 thể hiện cho môi trường, các quy trình nơi mục đích cải tiến môi trường làm việc của doanh nghiệp.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section2-2",
        text: "Những lợi ích mà 5S đem lại cho doanh nghiệp bạn có thể là các doanh nghiệp áp lọc mô hình này trước được cải xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn các công cụ, sản dụng sẽ được đặt theo vị trí quy định và sẽ dễ dàng tìm kiếm khi cần thiết.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section2-3",
        text: "Vì khi doanh nghiệp áp dụng chu quy trình toàn thanh lọc tự thực quản tốt cho môi trường viên. Và từ đó cũng góp phần làm tăng hiệu suất khi giảm được thời gian tìm kiếm.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "image-section-2",
        text: " ",
        type: "atomic",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            key: 1,
          },
        ],
        data: {},
      },
      {
        key: "section3",
        text: "3. Tại sao doanh nghiệp cần quy trình 5S?",
        type: "heading-two",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-1",
        text: "Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên tận dụng quy trình này:",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-1-title",
        text: "3.1 Cải thiện môi trường làm việc",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-1-reason",
        text: "Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-2-title",
        text: "3.2 Tiết kiệm thời gian làm việc",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-2-reason",
        text: "Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. ",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-3-title",
        text: "3.3 Tăng năng suất làm việc",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-3-reason",
        text: "Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc. ",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-4-title",
        text: "3.4 Tiết kiệm chi phí",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-4-reason",
        text: "Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình. ",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-5-title",
        text: "3.5 Tăng chất lượng sản phẩm",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section3-5-reason",
        text: "5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn. ",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "image-section-3",
        text: " ",
        type: "atomic",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            key: 2,
          },
        ],
        data: {},
      },

      //section 4
      {
        key: "section4",
        text: "4. Quy trình 5S gồm các bước",
        type: "heading-two",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-1",
        text: "5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-1-title",
        text: "4.1 Seiri (Ngăn nắp)",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-1-reason",
        text: "Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-2-title",
        text: "4.2 Seiton (Sắp xếp)",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-2-reason",
        text: "Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng. ",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-3-title",
        text: "4.3 Seiso (Vệ sinh)",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-3-reason",
        text: "Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-4-title",
        text: "4.4 Seiketsu (Tiêu chuẩn hóa)",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-4-reason",
        text: "Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-5-title",
        text: "4.5 Shitsuke (Kỷ luật)",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section4-5-reason",
        text: "Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình. ",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "image-section-4",
        text: " ",
        type: "atomic",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            key: 3,
          },
        ],
        data: {},
      },

      //section 5
      {
        key: "section5",
        text: "5. Quy trình được thực hiện như sau:",
        type: "heading-two",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-1",
        text: "Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-1-title",
        text: "5.1 Giai đoạn chuẩn bị",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-1-reason",
        text: "Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-2-title",
        text: "5.2 Triển khai rộng rãi",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-2-reason",
        text: "Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn. ",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-3-title",
        text: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-3-reason",
        text: "Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-4-title",
        text: "5.4 Sàng lọc, sắp xếp và đánh giá",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-4-reason",
        text: "Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-5-title",
        text: "5.5 Đánh giá",
        type: "heading-three",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section5-5-reason",
        text: "Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },

      //section 6
      {
        key: "section6",
        text: "6. Quy trình được thực hiện như sau:",
        type: "heading-two",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section6-1",
        text: "Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },

      {
        key: "section6-1-style",
        text: "Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.",
        type: "border-l",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },

      {
        key: "section6-2-style",
        text: "Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.",
        type: "border-l",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },

      {
        key: "section6-2",
        text: "Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },

      //section 7
      {
        key: "section7",
        text: "7. Đối tượng nào nên áp dụng 5S?",
        type: "heading-two",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section7-1",
        text: "Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "section7-2",
        text: "Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "image-section-7",
        text: " ",
        type: "atomic",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            key: 4,
          },
        ],
        data: {},
      },

      //section 8
      {
        key: "section8",
        text: "8. Các yếu tố tạo nên thành công cho quy trình 5S",
        type: "heading-two",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            style: "GREEN_TEXT_BOLD",
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: "section8-1",
        text: "Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },

      {
        key: "list8-1",
        text: "Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "list8-2",
        text: "Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "list8-3",
        text: "Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },

      {
        key: "section8-2",
        text: "Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {
      "0": {
        type: "IMAGE",
        mutability: "IMMUTABLE",
        data: {
          src: _5sProcess1,
          alt: "Ví dụ hình ảnh",
          caption: "Quy trình 5s là gì?",
          width: 800,
          height: 400,
        },
      },
      "1": {
        type: "IMAGE",
        mutability: "IMMUTABLE",
        data: {
          src: _5sProcess2,
          alt: "Ví dụ hình ảnh",
          caption: "Tại sao doanh nghiệp cần quy trình 5S?",
          width: 800,
          height: 400,
        },
      },
      "2": {
        type: "IMAGE",
        mutability: "IMMUTABLE",
        data: {
          src: _5sProcess3,
          alt: "Ví dụ hình ảnh",
          caption: "Quy trình 5s gồm các bước",
          width: 800,
          height: 400,
        },
      },
      "3": {
        type: "IMAGE",
        mutability: "IMMUTABLE",
        data: {
          src: _5sProcess4,
          alt: "Ví dụ hình ảnh",
          caption: "Các bước thực hiện quy trình 5s",
          width: 800,
          height: 400,
        },
      },
      "4": {
        type: "IMAGE",
        mutability: "IMMUTABLE",
        data: {
          src: _5sProcess5,
          alt: "Ví dụ hình ảnh",
          caption: "Các yếu tố tạo nên thành công cho quy trình 5S",
          width: 800,
          height: 400,
        },
      },
    },
  },
};
