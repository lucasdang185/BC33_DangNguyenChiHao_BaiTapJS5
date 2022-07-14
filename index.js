/**
 * BÀI TẬP 1: QUẢN LÝ TUYỂN SINH
 *
 * INPUT: ĐIỂM CHUẨN, ĐIỂM 3 MÔN, ĐIỂM ƯU TIÊN(ĐIỂM KHU VỰC VÀ ĐỐI TƯỢNG)
 * PROCESS:
 * 1: LẤY INPUT
 * 2: TẠO 2 HÀM LẤY ĐIỂM KHU VỰC VÀ ĐIỂM ĐỐI TƯỢNG SAU ĐÓ TRẢ VỀ GIÁ TRỊ YÊU CẦU 
 *    TẠO HÀM TÍNH TỔNG ĐIỂM(ĐIỂM 3 MÔN + ĐIỂM ƯU TIÊN)
 * 3: IN RA MÀN HÌNH
 * OUTPUT: SỐ ĐIỂM ĐẠT VÀ KẾT QUẢ "ĐẬU" HAY "RỚT"
 */

var basicPoint = 20;
var sub1 = 6;
var sub2 = 6;
var sub3 = 6;
var area ="A";
var priorityPer="1";

function calcAreaGrade(area) {
  if (area === "A") {
    return 2;
  }
  if (area === "B") {
    return 1;
  }
  if (area === "C") {
    return 0.5;
  }
  return 0;
}
function calcPriorityPerGrade(priorityPer) {
  if (priorityPer === "1") {
    return 2.5;
  }
  if (priorityPer === "2") {
    return 1.5;
  }
  if (priorityPer === "3") {
    return 1;
  }
  return 0;
}
function summary(){
    var priorityPerGrade = calcPriorityPerGrade(priorityPer);
    var areaGrade = calcAreaGrade(area);
    var sum = sub1+sub2+sub3+areaGrade+priorityPerGrade;
    if(sum >= basicPoint && sub1 >0 && sub2 >0 && sub3 >0 ){
        console.log("Đậu",sum);
    }else{
        console.log("Rớt",sum);
    }
}
summary();

/**
 * BÀI TẬP 2: TÍNH TIỀN ĐIỆN 
 * 
 * 
 * INPUT: TÊN VÀ SỐ KW ĐIỆN SỬ DỤNG
 * PROCESS:
 * 1: LẤY INPUT
 * 2: TẠO HÀM TÍNH TIỀN ĐIỆN
 *  TRƯỜNG HỢP 1: SỐ ĐIỆN VÀO <= 0, KIỂM TRA KHÔNG HỢP LỆ
 *  TH2: <= 50KW. TOTAL = KW * 500
 *  TH3: <= 100KW. TOTAL = 50*500 + (kw-50)*650;
 *  TH4: <= 200KW. TOTAL = 50*500 + 50*650 + (kw-100)*850;
 *  TH5: <= 350KW. TOTAL = 50*500 + 50*650 + 100*850 + (kw-200)*1100;
 *  TH6: >350KW. TOTAL = 50*500 + 50*650 + 100*850 + 150*1100 + (kw-350)*1300;
 * 
 * OUTPUT: SỐ TIỀN ĐIỆN PHẢI TRẢ 
 * 
 */

var name ="Lucas";
var kw = 360;

function calcElectric(){
    if(kw <= 0){
        console.log("Kiểm tra lại số điện");
    }
    if(kw <= 50 ){
        return kw * 500;
    }
    if(kw <=100 ){
        return 50*500 + (kw-50)*650;
    }
    if(kw <= 200){
        return 50*500 + 50*650 + (kw-100)*850;
    }
    if(kw <= 350){
        return 50*500 + 50*650 + 100*850 + (kw-200)*1100;
    }
    return 50*500 + 50*650 + 100*850 + 150*1100 + (kw-350)*1300;
}
var total = calcElectric(kw);
console.log("Số điện sử dụng phải trả:",total,"VNĐ");

