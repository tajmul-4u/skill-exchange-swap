import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
 
const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext)
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(name, photoURL);
      alert("✅ Profile updated successfully!");
      setEditMode(false);
      window.location.reload();
    } catch (err) {
      alert("❌ Error updating profile!");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-200 dark:from-gray-900 dark:to-gray-800">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/8bqfFyw/default-profile.jpg"}
          alt="Profile"
          className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-500 object-cover"
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
          {user?.displayName || "Unnamed User"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>

        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            ✏️ Update Profile
          </button>
        ) : (
          <form onSubmit={handleUpdate} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="New Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              placeholder="New Image URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
