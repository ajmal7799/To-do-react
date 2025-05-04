import React, { useState } from 'react'

function TodoList() {
    const [task, setTask] = useState(["Eat BreakFast", "coffee"])
    const [newTask, setNewTask] = useState("")
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            if (editIndex !== null) {
                const updatedTasks = [...task];
                updatedTasks[editIndex] = newTask;
                setTask(updatedTasks);
                setEditIndex(null);
            } else {
                setTask(t => [...t, newTask]);
            }
            setNewTask("")
        }
    }

    const deleteTask = (index) => {
        const updateTask = task.filter((_, i) => i !== index)
        setTask(updateTask)
    }

    const editTask = (index) => {
        setNewTask(task[index]);
        setEditIndex(index);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    // Inline styles
    const styles = {
        container: {
            maxWidth: '500px',
            margin: '0 auto',
            padding: '24px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
        },
        title: {
            fontSize: '28px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '24px',
            color: '#4f46e5'
        },
        inputContainer: {
            display: 'flex',
            marginBottom: '16px'
        },
        input: {
            flex: 1,
            padding: '10px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px 0 0 8px',
            outline: 'none',
            fontSize: '16px'
        },
        addButton: {
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '0 8px 8px 0',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
        },
        emptyMessage: {
            textAlign: 'center',
            color: '#6b7280',
            margin: '24px 0'
        },
        tasksList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        taskItem: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            marginBottom: '8px',
            transition: 'background-color 0.15s ease'
        },
        taskText: {
            flex: 1,
            marginRight: '16px'
        },
        buttonsContainer: {
            display: 'flex',
            gap: '8px'
        },
        editButton: {
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
        },
        deleteButton: {
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>To Do List</h1>

            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    style={styles.input}
                    placeholder="Add a new task..."
                />
                <button
                    onClick={addTask}
                    style={styles.addButton}
                >
                    {editIndex !== null ? 'Update' : 'Add'}
                </button>
            </div>

            {task.length === 0 ? (
                <p style={styles.emptyMessage}>No tasks yet. Add one above!</p>
            ) : (
                <ul style={styles.tasksList}>
                    {task.map((taskItem, index) => (
                        <li key={index} style={styles.taskItem}>
                            <span style={styles.taskText}>{taskItem}</span>
                            <div style={styles.buttonsContainer}>
                                <button
                                    onClick={() => editTask(index)}
                                    style={styles.editButton}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteTask(index)}
                                    style={styles.deleteButton}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TodoList