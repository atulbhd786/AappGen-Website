import React from "react";

function AdminTable() {
  const data = [
    {
      Contact_Id: 1,
      Name: "Rahul Sharma",
      Email: "rahul@gmail.com",
      Phone: "9876543210",
      More_Info: "Website Inquiry",
      Message: "Need a business website",
      Status_Id: "New",
      Created_Date: "2026-01-03",
      User_IP: "192.168.1.1",
      Browser: "Chrome",
    },
    {
      Contact_Id: 2,
      Name: "Anita Verma",
      Email: "anita@gmail.com",
      Phone: "9123456789",
      More_Info: "App Development",
      Message: "Looking for mobile app",
      Status_Id: "In Progress",
      Created_Date: "2026-01-02",
      User_IP: "192.168.1.15",
      Browser: "Edge",
    },
    {
      Contact_Id: 3,
      Name: "Anita Bhadauria",
      Email: "anita@gmail.com",
      Phone: "9123456789",
      More_Info: "App Development",
      Message: "Looking for mobile app",
      Status_Id: "In Progress",
      Created_Date: "2026-01-02",
      User_IP: "192.168.1.15",
      Browser: "Edge",
    },
    {
      Contact_Id: 4,
      Name: "Radu Singh",
      Email: "anita@gmail.com",
      Phone: "9123456789",
      More_Info: "App Development",
      Message: "Looking for mobile app",
      Status_Id: "In Progress",
      Created_Date: "2026-01-02",
      User_IP: "192.168.1.15",
      Browser: "Edge",
    },
    {
      Contact_Id: 5,
      Name: "Atul Bhadauria",
      Email: "anita@gmail.com",
      Phone: "9123456789",
      More_Info: "App Development",
      Message: "Looking for mobile app",
      Status_Id: "In Progress",
      Created_Date: "2026-01-02",
      User_IP: "192.168.1.15",
      Browser: "Edge",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div className="admin-header">
        <h1>Contact Enquiries</h1>

        <button className="export-btn">
            Export Data
        </button>
        </div>

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead style={{ background: "#00a6a6", color: "#fff" }}>
          <tr>
            <th>Contact_Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>More_Info</th>
            <th>Message</th>
            <th>Status_Id</th>
            <th>Created_Date</th>
            <th>User_IP</th>
            <th>Browser</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Contact_Id}</td>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Phone}</td>
              <td>{item.More_Info}</td>
              <td>{item.Message}</td>
              <td>{item.Status_Id}</td>
              <td>{item.Created_Date}</td>
              <td>{item.User_IP}</td>
              <td>{item.Browser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
