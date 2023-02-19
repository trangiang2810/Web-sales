
import Inspiration2 from './img/inspiration/inspiration5.jpg'
// import Inspiration3 from './img/inspiration/inspiration6.jpg'

import Inspiration5 from './img/inspiration/inspiration8.jpg'
import Inspiration6 from './img/inspiration/inspiration9.jpg'
import Inspiration7 from './img/inspiration/inspiration10.jpg'
import Inspiration8 from './img/inspiration/inspiration11.jpg'
import Inspiration9 from './img/inspiration/inspiration12.jpg'



import Sofa1 from './img/sofa/sofa1.jpg'
import Sofa2 from './img/sofa/sofa2.jpg'
// import Sofa3 from './img/sofa/sofa3.jpg'
import Sofa4 from './img/sofa/sofa4.jpg'
import Sofa5 from './img/sofa/sofa5.jpg'

import sf1 from './img/sofa/children/sf1.jpg'
import sf1_1 from './img/sofa/children/sf1_1.jpg'
import sf3_1 from './img/sofa/children/sf3_1.jpg'
import sf4_1 from './img/sofa/children/sf4_1.jpg'



import Lamp1 from './img/den/den1.jpg'
import Lamp2 from './img/den/den2.jpg'
import Lamp3 from './img/den/den3.jpg'
import Lamp4 from './img/den/den4.jpg'
import Lamp5 from './img/den/den5.jpg'
import Lamp6 from './img/den/den6.jpg'

import L5_1 from './img/den/Children/d5_1.jpg'
import L1_1 from './img/den/Children/d1_1.jpg'
import L1_2 from './img/den/Children/d1_2.jpg'
import L2_1 from './img/den/Children/d2_1.jpg'





import Ghe1 from './img/ghe/ghe1.jpg'
import Ghe2 from './img/ghe/ghe2.jpg'
import Ghe3 from './img/ghe/ghe3.jpg'
import Ghe4 from './img/ghe/ghe4.jpg'
import Ghe5 from './img/ghe/ghe5.jpg'
import Ghe6 from './img/ghe/ghe6.png'

import G2_1 from './img/ghe/Children/g2_1.jpg'
import G6_1 from './img/ghe/Children/g6_1.jpg'




import Tu1 from './img/tu/tu1.jpg'
import Tu2 from './img/tu/tu2.jpg'
import Tu3 from './img/tu/tu3.jpg'
import Tu4 from './img/tu/tu4.jpg'
import Tu5 from './img/tu/tu5.jpg'

import T3_1 from './img/tu/Children/t3_1.jpg'
import T5_1 from './img/tu/Children/t5_1.jpg'




export const inspirationData = [

    {   
        id: 1,
        title: 'Phòng khách Mây nét Việt đương đại',
        content: 'Phòng khách Mây với điểm nhấn là chất liệu mây tự[...]',
        image: Inspiration5
    },
    {   
        id: 2,
        title: 'Đơn giản và hiện đại',
        content: 'Không gian thoáng mát nhưng không thiếu phần tiện[...]',
        image: Inspiration2
    },
    {   
        id: 3,
        title: 'Không gian tươi mới',
        content: 'Xu hướng hòa mình với thiên nhiên vẫn luôn được ưa[...]',
        image: Inspiration6
    },{   
        id: 4,
        title: 'Tông xám làm chủ đạo',
        content: 'Sự hài hòa về tổng thể sẽ giúp phòng khách nhà bạn[...]',
        image: Inspiration7
    },{   
        id: 5,
        title: 'Phòng Ngủ Nhỏ Dành Cho Nữ',
        content: 'Ánh sáng là yếu tố vô cùng quan trọng để căn phòng[...]',
        image: Inspiration8
    },{   
        id: 6,
        title: 'Phong cách hiện đại - mới mẻ',
        content: 'Ngày nay, cuộc sống hiện đại đòi hỏi sự tiện nghi[...]',
        image: Inspiration9
    },
    
]


export const productsData = [

    {
        id: 1,
        type: 'Sofa',
        name: 'Sofa cao su', 
        image: Sofa1,
        imgChildren:[
            {
                id:1,
                image: Sofa1,

            },
            {
                id:2,
                image:sf1_1,

            },
            {
                id:1,
                image:sf1,

            },

            // img3:sf1,
        ],
        price: '950.000',
        reviews: '74',
        description:'Sofa bed được thiết kế chủ yếu bằng da simili cao cấp mang thương hiệu Cleo nhập khẩu tại Malaysia, cùng với đêm mút dày dặn, mềm mại cho bạn  những phút giây tuyệt vời nghỉ ngơi thư giãn khi tựa lưng vào ghế',
        intro:'Nếu như bạn đã chán ngấy với những mẫu bàn ghế gỗ truyền thống, cồng kềnh và đang muốn thay đổi tìm cho mình một sản phẩm sofa tích hợp với nhiều tính năng hữu ích mang đến cho bạn những phút giây thư thái thoải mái trong những ngày học tập, làm việc đầy căng thẳng. Nội thất Nghĩa Furniture gửi đến bạn một mẫu sofa giường làm nổi bật không gian nhà bạn thêm phần hiện đại đặc biệt đi kèm với đó là sự tiện ích chỉ trên một sản phẩm.',
        Details: {
            color: 'Nâu',
            material: 'Gỗ cao su tự nhiên',
            size: '1700 x 880 x 330'
        }
    },
    {
        id: 2,
        type: 'Sofa',
        name: 'Sofa vải đơn',
        image: Sofa2,
        imgChildren:[
            {
                id:1,
                image: Sofa2,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },

            // img3:sf1,
        ],

        price: '1200.000',
        reviews: '62',
        description:'- Ghế bàn ăn Jonstrup với thiết kế đệm ngồi bọc vải polyester êm ái và rất dễ vệ sinh. Chân ghế được làm từ kim loại sơn tĩnh điện chắc chắn và hạn chế rỉ sét',
        intro:'Bàn ghế ăn hiện nay đang là món đồ nội thất được ưa chuộng bởi nhiều gia đình. Vì nó đảm bảo được yếu tố thẩm mỹ lẫn thời thượng cho căn bếp và thể hiện cá tính cũng như phong cách của bạn.  Một bộ bàn ghế ăn hiện đại giúp gia đình bạn ấm cúng, gần nhau thêm. Ghế bàn ăn JONSTRUP là 1 lựa chọn lý tưởng cho việc kết hợp với đa dạng các mẫu bàn ăn khác, tạo nên điểm nhấn cho không gian bếp.',
        Details: {
            color: 'Xám',
            material: 'Nệm D40, lò xo sóng, bông gòn cao cấp, Gỗ thông nhập khẩu',
            size: 'R43xS53xC84cm'
        }
    },
    {
        id: 3,
        type: 'Sofa',
        name: 'Sofa cao cấp ',
        image: Sofa5,
        imgChildren:[
            {
                id:1,
                image: Sofa5,

            },
            {
                id:2,
                image:sf3_1,

            },
            {
                id:1,
                image:sf1,
            },

            // img3:sf1,
        ],
        price: '4500.000',
        reviews: '85',
        description:'Chuyển đổi linh hoạt với hai chế độ nằm và ngồi, cho phép bạn thoải mái thư giãn sau một ngày làm việc.',
        intro:'Bàn ghế ăn hiện nay đang là món đồ nội thất được ưa chuộng bởi nhiều gia đình. Vì nó đảm bảo được yếu tố thẩm mỹ lẫn thời thượng cho căn bếp và thể hiện cá tính cũng như phong cách của bạn.  Một bộ bàn ghế ăn hiện đại giúp gia đình bạn ấm cúng, gần nhau thêm. Ghế bàn ăn JONSTRUP là 1 lựa chọn lý tưởng cho việc kết hợp với đa dạng các mẫu bàn ăn khác, tạo nên điểm nhấn cho không gian bếp.',
        Details: {
            color: 'Trắng',
            material: 'Tựa lưng và đệm ngồi mút bọc vải Polyester, chân kim loại',
            size: '220 x 100 x 80 cm'
        }
    },
    {
        id: 4,
        type: 'Sofa',
        name: 'Sofa vải đôi',
        image: Sofa4,
        imgChildren:[
            {
                id:1,
                image: Sofa4,

            },
            {
                id:2,
                image:sf4_1,
                

            },
            {
                id:1,
                image:sf1,

            },

            // img3:sf1,
        ],
        price: '3800.000',
        reviews: '46',
        description:'- Được lấy cảm hứng từ phong cách Scandinavia hiện đại, tạo nên sự cân bằng trang nhã giữa kiểu dáng tối giản và cảm giác bình dị, lôi cuốn.',
        intro:'Từng đường nét của Silverlake được tính toán kỹ lưỡng đến từng chi tiết, tựa như công trình kiến trúc trường tồn vững chãi nhưng đầy tính nghệ thuật. Đệm lưng và nệm ngồi có thể tháo rời và điều chỉnh theo nhu cầu của bạn. Chi tiết xếp li trên từng cạnh nệm được chăm chút một cách tỉ mỉ, đơn giản nhưng cầu kỳ.',
        Details: {
            color: 'Đen',
            material: 'Gỗ thông nhập khẩu, Sắt sơn tĩnh điện, Sắt sơn tĩnh điện',
            size: '220 x 95 x 75 cm (Dài x Rộng x Cao)'
        }
    },

    {
        id: 5,
        type: 'Đèn',
        name: 'Đèn thả trần kim cương',
        image: Lamp1,
        imgChildren:[
            {
                id:1,
                image: Lamp1,

            },
            {
                id:2,
                image:L1_1,

            },
            {
                id:1,
                image:L1_2,

            },
        ],
        price: '150.000',
        reviews: '4',
        description:'- Ghế bàn ăn Jonstrup với thiết kế đệm ngồi bọc vải polyester êm ái và rất dễ vệ sinh. Chân ghế được làm từ kim loại sơn tĩnh điện chắc chắn và hạn chế rỉ sét',
        intro:'Bàn ghế ăn hiện nay đang là món đồ nội thất được ưa chuộng bởi nhiều gia đình. Vì nó đảm bảo được yếu tố thẩm mỹ lẫn thời thượng cho căn bếp và thể hiện cá tính cũng như phong cách của bạn.  Một bộ bàn ghế ăn hiện đại giúp gia đình bạn ấm cúng, gần nhau thêm. Ghế bàn ăn JONSTRUP là 1 lựa chọn lý tưởng cho việc kết hợp với đa dạng các mẫu bàn ăn khác, tạo nên điểm nhấn cho không gian bếp.',
        Details: {
            color: 'Đen',
            material: 'Tựa lưng và đệm ngồi mút bọc vải Polyester, chân kim loại',
            size: 'R43xS53xC84cm'
        }
    },
    {
        id: 6,
        type: 'Đèn',
        name: 'Đèn thả trần xoắn ốc',
        image: Lamp2,
        imgChildren:[
            {
                id:1,
                image: Lamp2,

            },
            {
                id:2,
                image:L2_1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '450.000',
        reviews: '12',
        description:'- Ghế bàn ăn Jonstrup với thiết kế đệm ngồi bọc vải polyester êm ái và rất dễ vệ sinh. Chân ghế được làm từ kim loại sơn tĩnh điện chắc chắn và hạn chế rỉ sét',
        intro:'Bàn ghế ăn hiện nay đang là món đồ nội thất được ưa chuộng bởi nhiều gia đình. Vì nó đảm bảo được yếu tố thẩm mỹ lẫn thời thượng cho căn bếp và thể hiện cá tính cũng như phong cách của bạn.  Một bộ bàn ghế ăn hiện đại giúp gia đình bạn ấm cúng, gần nhau thêm. Ghế bàn ăn JONSTRUP là 1 lựa chọn lý tưởng cho việc kết hợp với đa dạng các mẫu bàn ăn khác, tạo nên điểm nhấn cho không gian bếp.',
        Details: {
            color: 'Xám',
            material: 'Tựa lưng và đệm ngồi mút bọc vải Polyester, chân kim loại',
            size: 'R43xS53xC84cm'
        }
    },
    {
        id: 7,
        type: 'Đèn',
        name: 'Đèn thả trần trụ',
        image: Lamp3,
        imgChildren:[
            {
                id:1,
                image: Lamp3,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '220.000',
        reviews: '1',
        amount:'100',
        description:'- Được lấy cảm hứng từ phong cách Scandinavia hiện đại, tạo nên sự cân bằng trang nhã giữa kiểu dáng tối giản và cảm giác bình dị, lôi cuốn.',
        intro:'Từng đường nét của Silverlake được tính toán kỹ lưỡng đến từng chi tiết, tựa như công trình kiến trúc trường tồn vững chãi nhưng đầy tính nghệ thuật. Đệm lưng và nệm ngồi có thể tháo rời và điều chỉnh theo nhu cầu của bạn. Chi tiết xếp li trên từng cạnh nệm được chăm chút một cách tỉ mỉ, đơn giản nhưng cầu kỳ.',
        Details: {
            color: 'Đen',
            material: 'Tựa lưng và đệm ngồi mút bọc vải Polyester, chân kim loại',
            size: 'R43xS53xC84cm'
        }
    },
    {
        id: 8,
        type: 'Đèn',
        name: 'Đèn thả trần bông',
        image: Lamp4,
        imgChildren:[
            {
                id:1,
                image: Lamp4,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '360.000',
        reviews: '5',
        amount:'100',
        Details: {
            color: 'Trắng',
            material: 'Tựa lưng và đệm ngồi mút bọc vải Polyester, chân kim loại',
            size: 'R43xS53xC84cm'
        }
    },
    {
        id: 9,
        type: 'Đèn',
        name: 'Đèn đan tre',
        image: Lamp5,
        imgChildren:[
            {
                id:1,
                image: Lamp5,

            },
            {
                id:2,
                image:L5_1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '870.000',
        reviews: '8',
        amount:'100',
        description:'- Ghế bàn ăn Jonstrup với thiết kế đệm ngồi bọc vải polyester êm ái và rất dễ vệ sinh. Chân ghế được làm từ kim loại sơn tĩnh điện chắc chắn và hạn chế rỉ sét',
        intro:'Bàn ghế ăn hiện nay đang là món đồ nội thất được ưa chuộng bởi nhiều gia đình. Vì nó đảm bảo được yếu tố thẩm mỹ lẫn thời thượng cho căn bếp và thể hiện cá tính cũng như phong cách của bạn.  Một bộ bàn ghế ăn hiện đại giúp gia đình bạn ấm cúng, gần nhau thêm. Ghế bàn ăn JONSTRUP là 1 lựa chọn lý tưởng cho việc kết hợp với đa dạng các mẫu bàn ăn khác, tạo nên điểm nhấn cho không gian bếp.',
        Details: {
            color: 'Nâu',
            material: 'Tựa lưng và đệm ngồi mút bọc vải Polyester, chân kim loại',
            size: 'R43xS53xC84cm',

        }
    },
    
    {
        id: 10,
        type: 'Ghế',
        name: 'Ghế da chân gỗ',
        image: Ghe1,
        imgChildren:[
            {
                id:1,
                image: Ghe1,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '140.000',
        reviews: '8',
        amount:'100',
        description:'- Ghế bàn ăn Jonstrup với thiết kế đệm ngồi bọc vải polyester êm ái và rất dễ vệ sinh. Chân ghế được làm từ kim loại sơn tĩnh điện chắc chắn và hạn chế rỉ sét',
        intro:'Bàn ghế ăn hiện nay đang là món đồ nội thất được ưa chuộng bởi nhiều gia đình. Vì nó đảm bảo được yếu tố thẩm mỹ lẫn thời thượng cho căn bếp và thể hiện cá tính cũng như phong cách của bạn.  Một bộ bàn ghế ăn hiện đại giúp gia đình bạn ấm cúng, gần nhau thêm. Ghế bàn ăn JONSTRUP là 1 lựa chọn lý tưởng cho việc kết hợp với đa dạng các mẫu bàn ăn khác, tạo nên điểm nhấn cho không gian bếp.',
        Details: {
            color: 'Nâu',
            material: 'Tựa lưng và đệm ngồi mút bọc vải Polyester, chân kim loại',
            size: 'R43xS53xC84cm'
        }

    },
    {
        id: 11,
        type: 'Ghế',
        name: 'Ghế Cabin',
        image: Ghe2,
        imgChildren:[
            {
                id:1,
                image: Ghe2,

            },
            {
                id:2,
                image:G2_1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '210.000',
        reviews: '12',
        amount:'100',
        description:'- Ghế bàn ăn Jonstrup với thiết kế đệm ngồi bọc vải polyester êm ái và rất dễ vệ sinh. Chân ghế được làm từ kim loại sơn tĩnh điện chắc chắn và hạn chế rỉ sét',
        intro:'Bàn ghế ăn hiện nay đang là món đồ nội thất được ưa chuộng bởi nhiều gia đình. Vì nó đảm bảo được yếu tố thẩm mỹ lẫn thời thượng cho căn bếp và thể hiện cá tính cũng như phong cách của bạn.  Một bộ bàn ghế ăn hiện đại giúp gia đình bạn ấm cúng, gần nhau thêm. Ghế bàn ăn JONSTRUP là 1 lựa chọn lý tưởng cho việc kết hợp với đa dạng các mẫu bàn ăn khác, tạo nên điểm nhấn cho không gian bếp.',
        Details: {
            color: 'Nâu',
            material: 'Gỗ cao su/ Tần bì/ Sồi',
            size: '560x550x770mm'
        }
    },
    {
        id: 12,
        type: 'Ghế',
        name: 'Ghế Eames',
        image: Ghe4,
        imgChildren:[
            {
                id:1,
                image: Ghe4,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '170.000',
        reviews: '52',
        amount:'100',
        Details: {
            color: 'Trắng',
            material: 'Chân ghế làm bằng gỗ tự nhiên và, Phần lưng ghế bằng nhựa với độ cao và độ phân giải hợp lí',
            size: '45cm x 40cm / Cao:45cm.',
        }
    },
    {
        id: 13,
        type: 'Ghế',
        name: 'Ghế bọc dù chân xoay',
        image: Ghe5,
        imgChildren:[
            {
                id:1,
                image: Ghe5,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '950.000',
        reviews: '52',
        amount:'100',
        Details: {
            color: 'Nâu',
            material: 'Chân ghế làm bằng gỗ tự nhiên và, Phần lưng ghế bằng nhựa với độ cao và độ phân giải hợp lí',
            size: '45cm x 40cm / Cao:45cm.',
        }
    },
    {
        id: 14,
        type: 'Ghế',
        name: 'Ghế Eames bọc da',
        image: Ghe3,
        imgChildren:[
            {
                id:1,
                image: Ghe3,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '110.000',
        reviews: '52',
        amount:'100',
        Details: {
            color: 'Đen',
            material: 'Chân ghế làm bằng gỗ tự nhiên và, Phần lưng ghế bằng nhựa với độ cao và độ phân giải hợp lí',
            size: '45cm x 40cm / Cao:45cm.',
        }
    },
    {
        id: 15,
        type: 'Tủ',
        name: 'Tủ gỗ sồi 4 cánh',
        image: Tu1,
        imgChildren:[
            {
                id:1,
                image: Tu1,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '6000.000',
        reviews: '32',
        amount:'100',
        Details: {
            color: 'Nâu',
            material: 'Chân ghế làm bằng gỗ tự nhiên và, Phần lưng ghế bằng nhựa với độ cao và độ phân giải hợp lí',
            size: '45cm x 40cm / Cao:45cm.',
        }
    },
    {
        id: 16,
        type: 'Tủ',
        name: 'Tủ nhựa TQA ',
        image: Tu2,
        imgChildren:[
            {
                id:1,
                image: Tu2,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '3800.000',
        reviews: '27',
        amount:'100',
        Details: {
            color: 'Đen',
            material: 'Chân ghế làm bằng gỗ tự nhiên và, Phần lưng ghế bằng nhựa với độ cao và độ phân giải hợp lí',
            size: '45cm x 40cm / Cao:45cm.',
        }
    },
    {
        id: 17,
        type: 'Tủ',
        name: 'Tủ cửa lùa ',
        image: Tu3,
        imgChildren:[
            {
                id:1,
                image: Tu3,

            },
            {
                id:2,
                image:T3_1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '8900.000',
        reviews: '38',
        amount:'100',
        description:'- Được lấy cảm hứng từ phong cách Scandinavia hiện đại, tạo nên sự cân bằng trang nhã giữa kiểu dáng tối giản và cảm giác bình dị, lôi cuốn.',
        intro:'Từng đường nét của Silverlake được tính toán kỹ lưỡng đến từng chi tiết, tựa như công trình kiến trúc trường tồn vững chãi nhưng đầy tính nghệ thuật. Đệm lưng và nệm ngồi có thể tháo rời và điều chỉnh theo nhu cầu của bạn. Chi tiết xếp li trên từng cạnh nệm được chăm chút một cách tỉ mỉ, đơn giản nhưng cầu kỳ.',
        Details: {
            color: 'Xám',
            material: 'Chân ghế làm bằng gỗ tự nhiên và, Phần lưng ghế bằng nhựa với độ cao và độ phân giải hợp lí',
            size: '45cm x 40cm / Cao:45cm.',
        }
    },
    {
        id: 18,
        type: 'Tủ',
        name: 'Tủ gỗ tự nhiên ',
        image: Tu4,
        imgChildren:[
            {
                id:1,
                image: Tu4,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '1000.000',
        reviews: '71',
        amount:'100',
        description:'-Thiết kế sản phẩm mang phong cách hiện đại, kiểu dáng nhỏ gọn, phù hợp với nhiều không gian sống gia đình.',
        intro:'Đáp ứng xu hướng lựa chọn và tìm mua sản phẩm nội thất của khách hàng ngày nay, mẫu tủ bếp mang phong cách hiện đại, có kiểu dáng tiết kiệm diện tích. Tủ đựng đồ nhà bếp được chia thành nhiều ngăn cho bạn nhiều lựa chọn trong quá trình sử dụng.',
        Details: {
            color: 'Trắng',
            material: 'gỗ sồi kết hợp venner sồi, phun sơn S8 (chất lượng cao)',
            size: '1500 x 400 x 850mm. ',
        }
    },
    {
        id: 19,
        type: 'Tủ',
        name: 'Tủ đồ kiểu Mỹ ',
        image: Tu5,
        imgChildren:[
            {
                id:1,
                image: Tu5,

            },
            {
                id:2,
                image:T5_1,

            },
        ],
        price: '8200.000',
        reviews: '63',
        amount:'100',
        description:'-Mẫu tủ áo DTA03 được làm bởi gỗ công nghiệp MDF cốt xanh chống ẩm có độ bền lâu và chắc chắn theo thời gian sử dụng. Bề mặt gỗ phủ Melamine sáng bóng giúp tôn lên màu sắc của sản phẩm đồng thời hạn chế tối đa trầy xước khi va đập. ',
        intro:'Tủ quần áo kèm kệ trang trí đang dần trở thành mẫu thiết kế nội thất được nhiều người ưa chuộng và lựa chọn sử dụng. Bởi sự đa năng hiện đại nhưng vẫn không làm giảm tính thẩm mĩ, thậm chí còn trang trí cho không gian thêm đẹp và mới mẻ hơn.',
        Details: {
            color: 'Đen',
            material: 'Gỗ Công Nghiệp MDF phủ Melamine cốt xanh chống thấm',
            size: '2000 x 2400 x 600 (mm) (Rộng x Cao x Sâu). ',
        }
    },
    {
        id: 20,
        type: 'Đèn',
        name: 'Đèn led gắn tường',
        image: Lamp6,
        imgChildren:[
            {
                id:1,
                image: Lamp6,

            },
            {
                id:2,
                image:Sofa1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '720.000',
        reviews: '8',
        amount:'100',
        description:'Đèn LED gắn tường kiểu dáng sang trọng, kiểu dáng độc đáo, kích thước nhỏ gọn. Đèn LED treo tường tuổi thọ 30.000 giờ, ánh sáng đẹp tôn lên không gian chiếu sáng.',
        intro:'Đèn LED trang trí tường với thiết kế hiện đại, nhiều kiểu dáng khác lạ và sử dụng chất liệu đặc biệt mang lại cho không gian chiếu sáng của bạn vẻ đẹp thật tinh tế! Đèn LED gắn tường ngoài trời có công suất 5w, 7w, 14w phù hợp chiếu sáng và trang trí ngoài trời.',
        Details: {
            color: 'Trắng',
            material: 'Sản phẩm thiết kế với IP65 chống bụi chống nước, chuyên gắn các bức tường trang trí và chiếu sáng ngoài trời.',
            size: '10w ánh sáng vàng',

        }
    },
    {
        id: 21,
        type: 'Ghế',
        name: 'Ghế đơn nỉ',
        image: Ghe6,
        imgChildren:[
            {
                id:1,
                image: Ghe6,

            },
            {
                id:2,
                image:G6_1,

            },
            {
                id:1,
                image:sf1,

            },
        ],
        price: '870.000',
        reviews: '2',
        amount:'100',
        description:'Bề mặt gia công tỉ mỉ, sơn PU nhẵn mịn, đẹp mắt.',
        intro:'Bộ dụng cụ đầy đủ được cung cấp sẵn, dễ dàng lắp đặt.',
        Details: {
            color: 'Nâu',
            material: 'Vải nỉ, chân gỗ thông phủ melamin chống thấm, dễ dàng vệ sinh, lau chùi Thiết kế theo phong cách hiện đại, tiện nghi, sang trọng, tiết kiệm diện tích',
            size: '65*61*70cm.',
        }
    },
]
