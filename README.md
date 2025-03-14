# MBTI 性格测试 / MBTI Personality Test

[English Version](#english-version) | [中文版本](#中文版本)

## 中文版本

### 项目介绍

MBTI性格测试是一个基于React和Vite构建的Web应用，提供迈尔斯-布里格斯类型指标(MBTI)测试功能。该测试可以帮助用户深入了解自己的性格特点、思维方式、行为模式以及与他人的互动方式。

### 功能特点

- **完整的MBTI测试**：包含多个精心设计的问题，全面评估用户的性格特征
- **实时进度跟踪**：测试过程中显示完成进度和已回答问题数量
- **详细的结果分析**：测试完成后提供完整的性格类型分析，包括：
  - 16种MBTI性格类型的详细描述
  - 四个维度(E/I, S/N, T/F, J/P)的倾向程度
  - 性格特点强度评估
- **用户友好界面**：简洁直观的设计，流畅的测试体验
- **响应式布局**：适配各种设备屏幕尺寸

### 技术栈

- **React 19**：用于构建用户界面的JavaScript库
- **Vite 6**：现代前端构建工具，提供极速的开发体验
- **Ant Design 5.24.3**：企业级UI设计语言和React组件库
- **React Router 7.3.0**：React应用的声明式路由

### 快速开始

#### 安装依赖

```bash
npm install
```

#### 启动开发服务器

```bash
npm run dev
```

#### 构建生产版本

```bash
npm run build
```

#### 预览生产构建

```bash
npm run preview
```

### 项目结构

```
├── public/             # 静态资源
├── src/                # 源代码
│   ├── assets/         # 图片等资源文件
│   ├── components/     # React组件
│   │   ├── Home.jsx    # 主页组件
│   │   ├── Test.jsx    # 测试页组件
│   │   └── Result.jsx  # 结果页组件
│   ├── data/           # 数据文件
│   │   └── questions.js # 测试问题
│   ├── App.jsx         # 应用主组件
│   ├── main.jsx        # 应用入口
│   └── index.css       # 全局样式
├── index.html          # HTML模板
└── package.json        # 项目配置和依赖
```


## English Version

### Project Introduction

MBTI Personality Test is a web application built with React and Vite that provides Myers-Briggs Type Indicator (MBTI) testing functionality. This test helps users gain deeper insights into their personality traits, thinking patterns, behavioral tendencies, and interpersonal interactions.

### Features

- **Complete MBTI Assessment**: Includes multiple carefully designed questions to comprehensively evaluate personality traits
- **Real-time Progress Tracking**: Displays completion progress and number of answered questions during the test
- **Detailed Result Analysis**: Provides comprehensive personality type analysis upon completion, including:
  - Detailed descriptions of all 16 MBTI personality types
  - Preference levels across four dimensions (E/I, S/N, T/F, J/P)
  - Personality trait strength evaluation
- **User-friendly Interface**: Clean and intuitive design for a smooth testing experience
- **Responsive Layout**: Adapts to various device screen sizes

### Technology Stack

- **React 19**: JavaScript library for building user interfaces
- **Vite 6**: Modern frontend build tool offering extremely fast development experience
- **Ant Design 5.24.3**: Enterprise-class UI design language and React component library
- **React Router 7.3.0**: Declarative routing for React applications

### Quick Start

#### Install Dependencies

```bash
npm install
```

#### Start Development Server

```bash
npm run dev
```

#### Build for Production

```bash
npm run build
```

#### Preview Production Build

```bash
npm run preview
```

### Project Structure

```
├── public/             # Static assets
├── src/                # Source code
│   ├── assets/         # Images and other assets
│   ├── components/     # React components
│   │   ├── Home.jsx    # Home page component
│   │   ├── Test.jsx    # Test page component
│   │   └── Result.jsx  # Results page component
│   ├── data/           # Data files
│   │   └── questions.js # Test questions
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
└── package.json        # Project configuration and dependencies
```

