import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'ตื่นเช้า', completed: true },
        { id: 2, text: 'อาบน้ำ ล้างหน้า แปรงฟัน', completed: true },
        { id: 3, text: 'แต่งตัว', completed: true },
        { id: 4, text: 'ขี่รถจักรยานยนต์มาที่มหาลัย', completed: false },
        { id: 5, text: 'กินข้าวที่โรงอาหารของมหาลัย', completed: false},
        { id: 6, text: 'เข้าห้องเรียน', completed: false},
        { id: 7, text: 'เรียนเสร็จ', completed: false},
        { id: 8, text: 'ไปหาอะไรกิน', completed: false},
        { id: 9, text: 'กลับไปกินข้าวที่หอ', completed: false},
        { id: 10, text: 'ทำการบ้านที่ต้องส่ง', completed: false},
        { id: 11, text: 'อาบน้ำ ล้างหน้า แปรงฟัน', completed: false},
        { id: 12, text: 'นอน', completed: false}
    ];
    
    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3>📝 รายการที่ต้องทำ</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#3a3a3aff',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#52f15fff',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #585858ff',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#ceffceff' : '#ffc2c2ff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#000000ff' : '#333'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;