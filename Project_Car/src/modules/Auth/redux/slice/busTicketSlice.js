import { createSlice } from "@reduxjs/toolkit";

const busTicketSlice = createSlice({
    name: "busTicket",
    initialState: {
        selectedSeats: [],
        totalPrice: 0,
        bookedSeats: [],
    },
    reducers: {
        selectSeat: (state, action) => {
            const { isSelected, ...seat } = action.payload;

            if (isSelected) {
                const selectedSeats = [...state.selectedSeats, seat];
                const totalPrice = state.totalPrice + seat.price;
                return { ...state, selectedSeats, totalPrice };
            }

            const selectedSeats = state.selectedSeats.filter((item) => item.id !== seat.id);
            const totalPrice = state.totalPrice - seat.price;
            return { ...state, selectedSeats, totalPrice };
        },
        removeSeat: (state, action) => {
            const seat = action.payload;
            const selectedSeats = state.selectedSeats.filter((item) => item.id !== seat.id);
            const totalPrice = state.totalPrice - seat.price;
            return { ...state, selectedSeats, totalPrice };
        },
        paySeat: (state, action) => {
            // Lấy danh sách ghế đã chọn từ action.payload
            const selectedSeats = action.payload;
            // Tạo danh sách ghế đã đặt bằng cách đặt trạng thái "isBooked" thành true
            const bookedSeats = selectedSeats.map((seat) => {
                return { ...seat, isBooked: true };
            });
            // Tính toán tổng giá trị (trong trường hợp này là 0, bạn có thể cập nhật logic tính giá trị ở đây)
            const totalPrice = 0;
            // Trả về một bản sao mới của state với các thay đổi
            return { ...state, selectedSeats: [], bookedSeats, totalPrice };
        }
    },
});

// export actions
export const { selectSeat, removeSeat, paySeat } = busTicketSlice.actions;

// export reducer
export default busTicketSlice.reducer;