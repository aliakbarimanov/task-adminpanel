import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import Actions from '../Buttons/Actions';

interface DataType {
    name: {
        firstname: string;
        lastname: string;
    };
    email: string;
}

const Content: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[]>([]);

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch("https://fakestoreapi.com/users")
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        loadMoreData();
    }, []);

    return (
        <div
            id="scrollableDiv"
            style={{
                width: "80%",
                height: "550px",
                overflow: 'auto',
                margin: "0 auto",
                padding: '0 16px',
                border: '1px solid rgba(140, 140, 140, 0.35)',
            }}
        >
            <List
                dataSource={data}
                renderItem={(item) => (
                    <List.Item key={item.email}>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.name.firstname} {item.name.lastname}</a>}
                            description={item.email}
                        />
                        <Actions />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Content;