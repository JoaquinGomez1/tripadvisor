import React, { useState } from "react";

export default function EditableField({ text }) {
  const [editField, setEditField] = useState(false);
  const [fieldValue, setFieldValue] = useState(text);

  return (
    <div className='flex w-56 px-2 justify-between'>
      {editField ? (
        <input
          type='text'
          className='px-1 bg-gray-100 mr-2'
          onChange={({ target }) => setFieldValue(target.value)}
          value={fieldValue}
          onKeyDown={(e) => {
            e.key === "Enter" && setEditField(!editField);
          }}
        />
      ) : (
        <span>{fieldValue}</span>
      )}
      <button onClick={() => setEditField(!editField)}>
        {editField ? (
          <i className='fas fa-check p-1 text-green-600' />
        ) : (
          <i className='fas fa-edit p-1 text-gray-800' />
        )}
      </button>
    </div>
  );
}
