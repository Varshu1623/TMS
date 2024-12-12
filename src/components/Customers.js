import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";

const Customers = () => {
    const [customerList] = useState([
        { id: 1, name: "Suresh", email: "suresh.i@westayclose.in", phone: "1 888 900 9646" },
        { id: 2, name: "John Doe", email: "john.doe@example.com", phone: "1 800 123 4567" },
    ]);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            

            {/* Main Content */}
            <div style={{ flex: 1, padding: "20px" }}>
                <h2>Customers</h2>
                <Table style={{ width: "100%" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>Phone</TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customerList.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell>{customer.name}</TableCell>
                                <TableCell>{customer.email}</TableCell>
                                <TableCell>{customer.phone}</TableCell>
                                <TableCell>
                                    <Link
                                        to={`/customers/${customer.id}`}
                                        state={{ customer }}
                                        style={{
                                            textDecoration: "none",
                                            color: "#007BFF",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        View Details
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Customers;
