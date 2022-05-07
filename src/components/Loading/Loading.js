import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '300px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    variant="warning"
                />
                Loading...
            </Button>
        </div>
    );
};

export default Loading;