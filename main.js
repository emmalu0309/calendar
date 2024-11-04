let currentYear;
let currentMonth;

function generateCalendar(year, month) {
    const calendarBody = document.getElementById("calendarBody");
    const calendarTitle = document.getElementById("calendarTitle");
    const daysOfWeek = document.getElementById("daysOfWeek");

    // 清空之前的内容
    calendarBody.innerHTML = "";
    daysOfWeek.innerHTML = "";

    // 設置標題
    calendarTitle.textContent = `${year}年 ${month + 1}月`;

    // 設置星期幾標題
    const weekDays = ["日", "一", "二", "三", "四", "五", "六"];
    weekDays.forEach(day => {
        daysOfWeek.innerHTML += `<th>${day}</th>`;
    });

    // 獲取當月第一天是星期幾和當月總天數
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    // 生成日曆
    let row = "<tr>";

    // 在第一行中添加空白
    for (let i = 0; i < firstDay; i++) {
        row += "<td></td>";
    }

    // 填充當月每一天
    for (let day = 1; day <= totalDays; day++) {
        row += `<td><div>${day}</div></td>`;
        // 每七天换一行
        if ((day + firstDay) % 7 === 0) {
            row += "</tr><tr>";
        }
    }

    // 補充最后一行的空白
    const remainingCells = (totalDays + firstDay) % 7;
    if (remainingCells !== 0) {
        for (let i = 0; i < 7 - remainingCells; i++) {
            row += "<td></td>";
        }
    }

    row += "</tr>";

    //將行事曆添加到日曆主體
    calendarBody.innerHTML = row;
}

function updateCalendar() {
    generateCalendar(currentYear, currentMonth);
}

// 獲取當前日期
const today = new Date();
currentYear = today.getFullYear();
currentMonth = today.getMonth();

// 初始化日歷
updateCalendar();

// 綁定按鈕事件
document.getElementById("prevMonth").addEventListener("click", function () {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11; // 轉到上一年
        currentYear--;
    }
    updateCalendar();
});

document.getElementById("nextMonth").addEventListener("click", function () {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0; // 轉到下一年
        currentYear++;
    }
    updateCalendar();
});


