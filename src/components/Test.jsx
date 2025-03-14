import React, { useState } from 'react';
import { Button, Progress, Card, Radio, Space, Typography, Row, Col, Badge } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined, CheckOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';

const { Title, Paragraph, Text } = Typography;

const Test = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 计算结果并跳转到结果页面
      const result = calculateResult(answers);
      navigate('/result', { state: { result } });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = (answers) => {
    // 初始化计数器
    let e = 0, i = 0, s = 0, n = 0, t = 0, f = 0, j = 0, p = 0;
    
    // 根据答案计算各维度分数
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      const question = questions[questionIndex];
      switch (question.dimension) {
        case 'EI':
          answer === 'A' ? e++ : i++;
          break;
        case 'SN':
          answer === 'A' ? s++ : n++;
          break;
        case 'TF':
          answer === 'A' ? t++ : f++;
          break;
        case 'JP':
          answer === 'A' ? j++ : p++;
          break;
      }
    });
    
    // 确定每个维度的结果
    const personality = [
      e > i ? 'E' : 'I',
      s > n ? 'S' : 'N',
      t > f ? 'T' : 'F',
      j > p ? 'J' : 'P'
    ].join('');
    
    // 计算百分比
    const percentages = {
      ei: Math.round((Math.max(e, i) / (e + i)) * 100),
      sn: Math.round((Math.max(s, n) / (s + n)) * 100),
      tf: Math.round((Math.max(t, f) / (t + f)) * 100),
      jp: Math.round((Math.max(j, p) / (j + p)) * 100)
    };
    
    return {
      personality,
      percentages,
      counts: { e, i, s, n, t, f, j, p }
    };
  };

  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);
  const question = questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="test-container">
      <Card className="test-card">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Badge count={answeredCount} showZero overflowCount={questions.length} style={{ backgroundColor: '#4096ff' }}>
              <Text type="secondary">已回答</Text>
            </Badge>
            <Text type="secondary">总共 {questions.length} 题</Text>
          </div>
          
          <Progress 
            percent={progress} 
            status="active" 
            strokeColor={{from: '#108ee9', to: '#4096ff'}} 
            showInfo={false}
          />
          
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <QuestionCircleOutlined style={{ fontSize: '28px', color: '#4096ff', marginBottom: '16px' }} />
            <Title level={4}>
              问题 {currentQuestion + 1}/{questions.length}
            </Title>
          </div>
          
          <Paragraph style={{ fontSize: '18px', textAlign: 'center', fontWeight: '500' }}>
            {question.text}
          </Paragraph>
          
          <Radio.Group 
            onChange={(e) => handleAnswer(e.target.value)}
            value={answers[currentQuestion]}
            style={{ width: '100%' }}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <Radio value="A" style={{ height: '40px', width: '100%' }}>
                <div style={{ padding: '8px 0', display: 'flex', alignItems: 'center', height: '100%' }}>{question.options.A}</div>
              </Radio>
              <Radio value="B" style={{ height: '40px', width: '100%' }}>
                <div style={{ padding: '8px 0', display: 'flex', alignItems: 'center', height: '100%' }}>{question.options.B}</div>
              </Radio>
            </Space>
          </Radio.Group>
          
          <Row justify="space-between" align="middle" style={{ marginTop: '24px' }}>
            <Col>
              {currentQuestion > 0 && (
                <Button 
                  onClick={handlePrevious} 
                  icon={<ArrowLeftOutlined />}
                >
                  上一题
                </Button>
              )}
            </Col>
            <Col>
              <Text type={answers[currentQuestion] ? 'success' : 'secondary'} style={{ margin: 0 }}>
                {answers[currentQuestion] ? '已选择' : '请选择一个选项'}
              </Text>
            </Col>
            <Col>
              {currentQuestion < questions.length - 1 ? (
                <Button 
                  type="primary" 
                  onClick={handleNext} 
                  disabled={!answers[currentQuestion]}
                  icon={<ArrowRightOutlined />}
                >
                  下一题
                </Button>
              ) : (
                <Button 
                  type="primary" 
                  onClick={handleNext} 
                  disabled={!answers[currentQuestion]}
                  icon={<CheckOutlined />}
                >
                  完成测试
                </Button>
              )}
            </Col>
          </Row>
        </Space>
      </Card>
    </div>
  );
};

export default Test;