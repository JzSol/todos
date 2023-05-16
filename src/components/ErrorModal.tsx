import { useState } from 'react';

export const ErrorModal = () => {
  const [isError, setIsError] = useState(true);

  const hideErrorMessage = () => {
    setIsError(false);
  };

  return (
    /* Notification is shown in case of any error */
    <div
      className={`notification is-danger is-light has-text-weight-normal ${
        isError ? '' : 'hidden'
      }`}>
      <button
        type='button'
        className='delete'
        onClick={hideErrorMessage}
      />
      {/* show only one message at a time */}
      Unable to add a todo
      <br />
      {/* Unable to delete a todo
      <br />
      Unable to update a todo */}
    </div>
  );
};
