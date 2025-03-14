import React from 'react';
import { Card, Typography, Space, Row, Col, Progress, Button, Divider, Tag } from 'antd';
import { HomeOutlined, RedoOutlined, HeartOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const personalityDescriptions = {
  ISTJ: {
    title: "检查者",
    description: "安静、严肃、通过全面性和可靠性获得成功。实际，注重事实，有责任感。决定有逻辑性，并一步一步地朝着目标前进，不易分心。喜欢将工作、家庭和生活都组织得井井有条。重视传统和忠诚。"
  },
  ISFJ: {
    title: "守护者",
    description: "安静、友好、有责任感和谨慎。坚定地致力于履行义务。全面、勤奋、精确，忠诚、体贴，留心并记得他人的细节，关心他人的感受。努力创造一个有秩序、和谐的工作和家庭环境。"
  },
  INFJ: {
    title: "提倡者",
    description: "寻求思想、关系、物质等方面的意义和联系。希望了解什么能够激励人，对人有很强的洞察力。有责任心，坚持自己的价值观。对于怎样更好地服务大众有清晰的远景。在对于目标的实现过程中有计划而且果断坚定。"
  },
  INTJ: {
    title: "建筑师",
    description: "在实现自己的想法和达成自己的目标时有独创性和动力。能够快速洞察外界事物间的规律并形成长期的远景计划。一旦决定做一件事就会开始规划并直到完成为止。持怀疑态度，独立，对于能力和表现有高标准。"
  },
  ISTP: {
    title: "鉴赏家",
    description: "灵活、忍耐力强，是安静的观察者，直到问题出现才会采取行动，然后找出实用的解决方法。分析事物运作的原理，能够从大量信息中找出关键点，并使用逻辑的方式解决实际问题。对于因果关系感兴趣，用最小的努力获取最大的效果。"
  },
  ISFP: {
    title: "探险家",
    description: "安静、友好、敏感、和善。享受当下，喜欢自己的空间，喜欢按照自己的时间表工作。忠诚、专注于自己的价值观，对于自己认为重要的人和事非常投入。不喜欢不一致和争论，不会强迫自己的观点或价值观于他人。"
  },
  INFP: {
    title: "调停者",
    description: "理想主义，忠于自己的价值观和自己所关心的人。希望外部的生活与内心的价值观一致。好奇性强，很快能看到事情的可能性，能够促使事情的发生。寻求理解他人和帮助他人发展潜能的和谐。适应力强，灵活，接受力强，除非价值观受到威胁。"
  },
  INTP: {
    title: "思想家",
    description: "寻求在逻辑上解释他们感兴趣的事物的合理解释。理论性强，对抽象概念而非社交活动更感兴趣。安静、内敛、灵活、适应力强。有解决问题的独特能力，特别是那些需要理论分析的问题。喜欢批判性思考，总是寻找逻辑上的不一致和漏洞。"
  },
  ESTP: {
    title: "企业家",
    description: "灵活、忍耐力强，实用主义者，专注于立竿见影的结果。觉得理论和抽象的解释非常无趣。喜欢积极地采取行动解决问题。专注于当下，自然不做作，享受当下的每一刻。喜欢物质享受和时尚。通过实践学习最好。"
  },
  ESFP: {
    title: "表演者",
    description: "外向、友好、接受力强。热爱生活、人类和物质上的享受。喜欢与他人一起完成事情。在工作中讲究常识和实用性，使工作更有趣。灵活、自然不做作，易于适应新的人和环境。学习新事物最好的方式是与他人一起尝试。"
  },
  ENFP: {
    title: "竞选者",
    description: "热情洋溢、富有想象力。认为生活充满可能性。能够很快地将事件和信息联系起来，并自信地根据所发现的规律做决定。急切需要他人的肯定，随时准备给予赞赏和支持。自然不做作，多才多艺，富有创新精神，口头表达能力强。"
  },
  ENTP: {
    title: "辩论家",
    description: "反应快、睿智，有激励他人的能力，警觉性强，直言不讳。在解决新的、具有挑战性的问题时机智而有策略。善于找出理论上的可能性，然后用战略的眼光分析它们。善于理解他人。不喜欢例行公事，很少会用相同的方法做相同的事情，倾向于一个接一个地发展新的爱好。"
  },
  ESTJ: {
    title: "总经理",
    description: "实际、现实主义者，果断，一旦下定决心就会马上采取行动。善于将项目和人组织起来将事情完成，并以最有效率的方式达到预期的结果。注重日常的细节。有明确的价值观念，在家庭和社区中非常积极参与。有系统、有条理，坚定、稳重、诚实。"
  },
  ESFJ: {
    title: "执政官",
    description: "热心肠、有责任感、合作性强。希望周围的环境温馨而和谐，为此会果断地执行。喜欢与他人一起精确并按时地完成任务。忠诚，即使在小事上也会坚持不懈。能够发现日常生活他人所需并试图满足它们。希望自己和自己的所作所为能受到他人的认可和赞赏。"
  },
  ENFJ: {
    title: "主人公",
    description: "热情、为他人着想、易感应、有责任心。非常关注他人的情感、需求和动机。善于发现他人的潜能，并希望帮助他们实现。可能会成为个人或群体成长和进步的催化剂。忠诚，对于表扬和批评都能做出积极的回应。友善、好社交。在团体中能很好地帮助他人，并提供有感染力的领导。"
  },
  ENTJ: {
    title: "指挥官",
    description: "坦率、果断，有天生的领导能力。能很快看到公司/组织程序和政策中的不合理性和低效能性，发展并实施全面而系统的解决方案。喜欢长期的计划和目标的设定。通常见多识广，博览群书，喜欢拓广自己的知识面并将此分享给他人。在陈述自己的想法时非常强而有力。"
  }
};

const dimensionDescriptions = {
  E: "外向型 (Extraversion)：从外部世界获取能量，喜欢社交互动",
  I: "内向型 (Introversion)：从内心世界获取能量，需要独处时间",
  S: "感觉型 (Sensing)：关注具体事实和细节，注重现实和实际经验",
  N: "直觉型 (iNtuition)：关注概念和可能性，注重未来和创新",
  T: "思考型 (Thinking)：决策基于逻辑和客观分析",
  F: "情感型 (Feeling)：决策基于个人价值观和对他人的影响",
  J: "判断型 (Judging)：喜欢有序、计划和结构",
  P: "感知型 (Perceiving)：喜欢灵活、自发和适应性强"
};

const Result = () => {
  const location = useLocation();
  const { result } = location.state || { result: null };
  
  if (!result) {
    return (
      <div className="result-container">
        <Card className="result-card">
          <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
            <Title level={2}>未找到测试结果</Title>
            <Paragraph>
              您似乎还没有完成MBTI测试，或者结果数据丢失。
            </Paragraph>
            <Link to="/test">
              <Button type="primary" icon={<RedoOutlined />}>
                开始测试
              </Button>
            </Link>
          </Space>
        </Card>
      </div>
    );
  }
  
  const { personality, percentages, counts } = result;
  const personalityInfo = personalityDescriptions[personality] || {
    title: "未知类型",
    description: "无法获取该性格类型的描述信息。"
  };
  
  // 计算每个维度的强度标签
  const getStrengthLabel = (percent) => {
    if (percent >= 90) return "非常强烈";
    if (percent >= 75) return "强烈";
    if (percent >= 60) return "中等";
    return "轻微";
  };
  
  return (
    <div className="result-container">
      <Card className="result-card">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <Title level={1}>{personality}</Title>
            <Title level={3}>{personalityInfo.title}</Title>
            <Tag color="#4096ff" style={{ fontSize: '14px', padding: '4px 8px', marginTop: '8px' }}>
              <HeartOutlined /> 您的独特性格类型
            </Tag>
          </div>
          
          <Paragraph style={{ fontSize: '16px', textAlign: 'justify', marginTop: '16px' }}>
            {personalityInfo.description}
          </Paragraph>
          
          <Divider orientation="center">性格维度详情</Divider>
          
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <div>
              <Row align="middle">
                <Col span={4} style={{ textAlign: 'right', paddingRight: '10px' }}>
                  <Text strong>E</Text>
                </Col>
                <Col span={16}>
                  <Progress 
                    percent={personality[0] === 'E' ? percentages.ei : 100 - percentages.ei} 
                    status="active"
                    strokeColor={personality[0] === 'E' ? '#4096ff' : '#d9d9d9'}
                  />
                </Col>
                <Col span={4} style={{ paddingLeft: '10px' }}>
                  <Text strong>I</Text>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Paragraph style={{ marginTop: '5px' }}>
                    <Text type="secondary">
                      {personality[0] === 'E' ? dimensionDescriptions.E : dimensionDescriptions.I}
                    </Text>
                    <Tag color="blue" style={{ marginLeft: '8px' }}>
                      {getStrengthLabel(personality[0] === 'E' ? percentages.ei : 100 - percentages.ei)}
                    </Tag>
                  </Paragraph>
                </Col>
              </Row>
            </div>
            
            <div>
              <Row align="middle">
                <Col span={4} style={{ textAlign: 'right', paddingRight: '10px' }}>
                  <Text strong>S</Text>
                </Col>
                <Col span={16}>
                  <Progress 
                    percent={personality[1] === 'S' ? percentages.sn : 100 - percentages.sn} 
                    status="active"
                    strokeColor={personality[1] === 'S' ? '#4096ff' : '#d9d9d9'}
                  />
                </Col>
                <Col span={4} style={{ paddingLeft: '10px' }}>
                  <Text strong>N</Text>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Paragraph style={{ marginTop: '5px' }}>
                    <Text type="secondary">
                      {personality[1] === 'S' ? dimensionDescriptions.S : dimensionDescriptions.N}
                    </Text>
                    <Tag color="blue" style={{ marginLeft: '8px' }}>
                      {getStrengthLabel(personality[1] === 'S' ? percentages.sn : 100 - percentages.sn)}
                    </Tag>
                  </Paragraph>
                </Col>
              </Row>
            </div>
            
            <div>
              <Row align="middle">
                <Col span={4} style={{ textAlign: 'right', paddingRight: '10px' }}>
                  <Text strong>T</Text>
                </Col>
                <Col span={16}>
                  <Progress 
                    percent={personality[2] === 'T' ? percentages.tf : 100 - percentages.tf} 
                    status="active"
                    strokeColor={personality[2] === 'T' ? '#4096ff' : '#d9d9d9'}
                  />
                </Col>
                <Col span={4} style={{ paddingLeft: '10px' }}>
                  <Text strong>F</Text>
                </Col>
              </Row>
              <Paragraph style={{ marginTop: '5px' }}>
                <Text type="secondary">
                  {personality[2] === 'T' ? dimensionDescriptions.T : dimensionDescriptions.F}
                </Text>
                <Tag color="blue" style={{ marginLeft: '8px' }}>
                  {getStrengthLabel(personality[2] === 'T' ? percentages.tf : 100 - percentages.tf)}
                </Tag>
              </Paragraph>
            </div>
            
            <div>
              <Row align="middle">
                <Col span={4} style={{ textAlign: 'right', paddingRight: '10px' }}>
                  <Text strong>J</Text>
                </Col>
                <Col span={16}>
                  <Progress 
                    percent={personality[3] === 'J' ? percentages.jp : 100 - percentages.jp} 
                    status="active"
                    strokeColor={personality[3] === 'J' ? '#4096ff' : '#d9d9d9'}
                  />
                </Col>
                <Col span={4} style={{ paddingLeft: '10px' }}>
                  <Text strong>P</Text>
                </Col>
              </Row>
              <Paragraph style={{ marginTop: '5px' }}>
                <Text type="secondary">
                  {personality[3] === 'J' ? dimensionDescriptions.J : dimensionDescriptions.P}
                </Text>
                <Tag color="blue" style={{ marginLeft: '8px' }}>
                  {getStrengthLabel(personality[3] === 'J' ? percentages.jp : 100 - percentages.jp)}
                </Tag>
              </Paragraph>
            </div>
          </Space>
          
          <Divider>操作</Divider>
          
          <Row justify="center" gutter={16}>
            <Col>
              <Link to="/">
                <Button icon={<HomeOutlined />}>返回首页</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/test">
                <Button type="primary" icon={<RedoOutlined />}>重新测试</Button>
              </Link>
            </Col>
          </Row>
        </Space>
      </Card>
    </div>
  );
};

export default Result;