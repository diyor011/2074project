import React from 'react'

const Users = () => {
  return (
    <div className='mt-25'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yunus</div>
              <div className="text-sm opacity-50">Uzbekistan</div>
            </div>
          </div>
        </td>
        <td>
          React router-dom
          <br />
          <span className="badge badge-ghost badge-sm">1</span>
        </td>
        <td className='btn btn-accent mt-3 text-black'>White</td>
        <th>
          <button className="btn btn-error">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Odil</div>
              <div className="text-sm opacity-50">Uzbekistan</div>
            </div>
          </div>
        </td>
        <td>
          Navbar
          <br />
          <span className="badge badge-ghost badge-sm">2</span>
        </td>
        <td className='btn btn-accent mt-3 text-black w-18'>Blue</td>
        <th>
          <button className="btn btn-error">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Behruz</div>
              <div className="text-sm opacity-50">Uzbekistan</div>
            </div>
          </div>
        </td>
        <td>
          Product
          <br />
          <span className="badge badge-ghost badge-sm">3</span>
        </td>
        <td className='btn btn-accent mt-3 text-black'>Yellow</td>
        <th>
          <button className="btn btn-error">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Muhammadamin</div>
              <div className="text-sm opacity-50">Uzbekistan</div>
            </div>
          </div>
        </td>
        <td>
          Users
          <br />
          <span className="badge badge-ghost badge-sm">4</span>
        </td>
        <td className='btn btn-accent mt-3 text-black'>White</td>
        <th>
          <button className="btn btn-error">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
    </div>
  )
}

export default Users
