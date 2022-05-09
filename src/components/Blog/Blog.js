import React from 'react';
import { Accordion } from 'react-bootstrap';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <div className='mt-5 mx-3 py-5 bg-light'>
            <Header></Header>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Difference between JavaScrip vs nodeJs.</Accordion.Header>
                    <Accordion.Body>
                        <strong>JavaScrip :</strong> JavaScript can only be in the browsers, and its generally used on the client side. It capable enough to add HTML and play with DOM (Document Object Model). JS used in frontend web development. And contains all basic elements to develope a site. <br />
                        <strong>NodeJs : </strong> NodeJS is a Javascript runtime environment. JS play with client and node play with server site. Usually node Js connect client with server. So, node js marked as backend development. Backend part store data of user and deliver with client site.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When should use node.js and when mongodb?</Accordion.Header>
                    <Accordion.Body>
                        <strong>Node.js :</strong> Node.js is a rapidly growing technology that has been overtaking the world of server-side programming with surprising speed. <br />
                        <strong>Mongodb : </strong> MongoDB is a technology that’s revolutionizing database usage. Together, the two tools are a potent combination, thanks to the fact that they both employ JavaScript and JSON. MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Difference between SQL vs NoSQL.</Accordion.Header>
                    <Accordion.Body>
                        <strong>JWT </strong>means JSON Web Token. It is a mechanism to verify the owner of some JSON data. It is an encoded, URL-safe string that can contain an unlimited amount of data and cryptographically signed. When Server get a call from JWT, it can guarantee the data it contains can be trusted because it's signed the source. Finally we can tell that, JWT secure our valuable data from hacking and sign an agreement ensuring that, My data will be safe.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;