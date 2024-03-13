import { PlayCircleOutlined } from "@ant-design/icons";
import { Card, Modal, Row, Col, Button } from "antd";
import React, { useState } from "react";

function MovieCard({ movie }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    console.log(movie.introduce);

    return (
        <>
            <Card
                hoverable
                key={movie._id}
                style={{
                    width: '70%',
                }}
                cover={<img style={{ height: '232.83px' }} alt={movie.name} src={movie.image} />}
                onClick={showModal}
            >
                <Card.Meta title={movie.name} description={`${movie.time} min ${movie.year}`} />
            </Card>

            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                width="70%"
                height="385.76px"
            >
                <Row>
                    <Col span={10}>
                        <img
                            style={{ width: 'auto', height: '450px' }}
                            alt={movie.name}
                            src={movie.image}
                        />
                    </Col>
                    <Col span={14}>
                        <h1>{movie.name}</h1>
                        <p style={{ color: 'grey' }}>{`${movie.time} min ${movie.year}`}</p>
                        <p>{movie.introduce}</p>
                        <Button style={{ background: 'orange', color: 'white', borderRadius: '20px' }} icon={<PlayCircleOutlined />}>PLAY MOVIE</Button>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}

export default MovieCard;