import React, { useState } from 'react'
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const AcceptTask = ({data}) => {
    console.log();
    
 const [taskStatus, setTaskStatus] = useState('accepted');
 const handleComplete = () => {
    setTaskStatus('completed');
}
const handleFail = () => {
    setTaskStatus('failed');
  
  };
  return (
    <>
    {taskStatus == 'accepted' ? ( <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs' onClick={handleComplete} >Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'  onClick={handleFail}>Mark as Failed</button>
            </div>
        </div> ) : taskStatus === 'completed' ? (<CompleteTask data = {data}/>) : (<FailedTask data = {data}/>)}
   
        </>
  )
}

export default AcceptTask
{/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs' onClick={handleComplete} >Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'  onClick={handleFail}>Mark as Failed</button>
            </div>
        </div>  */}