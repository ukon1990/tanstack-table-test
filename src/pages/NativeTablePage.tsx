import { useState } from "react";
import { Container } from "react-bootstrap";
import { personData } from "../data/person.data";

const NativeTablePage = () => (
        <Container>
            <table className="table grid-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {personData.map(person => (
                        <tr>
                            <td>{person.name}</td>
                            <td className="text-end">{person.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );

export default NativeTablePage