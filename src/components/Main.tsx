export const Main = () => {
  return (
    <section className='todoapp__main'>
      {/* This todo is not completed */}
      <div className='todo'>
        <label className='todo__status-label'>
          <input
            type='checkbox'
            className='todo__status'
          />
        </label>

        <span className='todo__title'>Not Completed Todo</span>
        <button
          type='button'
          className='todo__remove'>
          ×
        </button>

        <div className='modal overlay'>
          <div className='modal-background has-background-white-ter' />
          <div className='loader' />
        </div>
      </div>
    </section>
  );
};
