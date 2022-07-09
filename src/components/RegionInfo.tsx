import React from 'react';

const RegionInfo = () => {
  return (
    <div className="grid relative bottom-8">
      <div className='flex justify-center'>
        <img src="" alt="" />
        <h3 className='text-xl'>27</h3>
      </div>

      <label htmlFor="birr" className='text-sm mr-2 my-1'>
        <input type="text" name="birr" className="border-2 mr-3 rounded-lg px-2 py-1" />
        ETB
      </label>
      <label htmlFor="dollar" className='text-sm mr-2 my-1'>
        <input type="text" name="dollar" className="border-2 mr-3 rounded-lg px-2 py-1" />
        USD
      </label>
    </div>
  );
}

export default RegionInfo;
