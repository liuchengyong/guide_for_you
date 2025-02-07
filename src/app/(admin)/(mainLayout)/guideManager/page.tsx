'use client';
import { Button } from 'antd';
import GuideManagerForm from './components/guideForms';
import { useEffect, useState } from 'react';

const GuideManager = () => {
    const [showDrawer, setShowDrawer] = useState<boolean>(false);

    useEffect(() => {
        fetch('/api/guide')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);

    return (
        <>
            <Button
                type="primary"
                onClick={() => {
                    setShowDrawer(true);
                }}
            >
                添加导航
            </Button>
            <GuideManagerForm
                open={showDrawer}
                onClose={() => {
                    setShowDrawer(false);
                }}
            ></GuideManagerForm>
            ;
        </>
    );
};

export default GuideManager;
