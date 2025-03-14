import React from 'react';
import { Button, Typography, Space, Card, Row, Col } from 'antd';
import { ArrowRightOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div className="home-container">
      <Card className="home-card">
        <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
          <Row justify="center">
            <Col>
              <QuestionCircleOutlined style={{ fontSize: '48px', color: '#4096ff', marginBottom: '16px' }} />
            </Col>
          </Row>
          <Title level={1}>MBTI 性格测试</Title>
          <Paragraph>
            MBTI（迈尔斯-布里格斯类型指标）是一种广受欢迎的性格类型学说，通过测试可以帮助您深入了解自己的性格特点、
            思维方式、行为模式以及与他人的互动方式。
          </Paragraph>
          <Paragraph>
            本测试包含多个精心设计的问题，大约需要15-20分钟完成。请根据您的真实想法回答问题，没有对错之分。
            完成测试后，您将获得详细的性格分析报告。
          </Paragraph>
          <Link to="/test">
            <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
              开始测试
            </Button>
          </Link>
        </Space>
      </Card>
    </div>
  );
};

export default Home;