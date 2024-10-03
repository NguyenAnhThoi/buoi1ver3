import React from 'react';
import { Hello, HelloPerson } from './Hello'; // Sửa ở đây
import { Header } from './Header';


function App() {
    const studentName = "Nguyễn Anh Thời"; // Thay đổi tên sinh viên tại đây

    return (
        <div>
            <Header />
            <HelloPerson name={studentName} />
        </div>
    );
}

export default App;