const users = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  { id: 3, name: "Michael Johnson", role: "User", status: "Suspended" },
  { id: 4, name: "Emily Davis", role: "Admin", status: "Inactive" },
  { id: 5, name: "Daniel Brown", role: "Editor", status: "Active" },
  { id: 6, name: "Sarah Wilson", role: "User", status: "Active" },
  { id: 7, name: "David Miller", role: "Admin", status: "Suspended" },
  { id: 8, name: "Olivia Taylor", role: "Editor", status: "Suspended" },
  { id: 9, name: "James Anderson", role: "User", status: "Inactive" },
  { id: 10, name: "Sophia Martinez", role: "Admin", status: "Active" },
];

const UsersList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Users List</h1>

        {/* Users Table */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="py-4 px-4">{user.name}</td>
                  <td className="py-4 px-4">hhoang@gmail.com</td>
                  <td className="py-4 px-4">{user.role}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`${
                        user.status === "Active"
                          ? "text-green-500"
                          : user.status === "Inactive"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      Edit
                    </button>
                    <button className="ml-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UsersList;
