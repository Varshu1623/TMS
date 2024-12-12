import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css'; // Import the CSS for styling

const Dashboard = () => {
  // Data for the Doughnut chart (Keyword Search Stats)
  const doughnutData = {
    labels: ['Used', 'Unused'],
    datasets: [
      {
        data: [50, 50], // Example data to create a half-circle
        backgroundColor: ['#d1d3d4', '#f4f4f4'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: '80%',
      },
    ],
  };

  // Data for the Line chart (Article Views)
  const lineData = {
    labels: ['30 Nov', '1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec'],
    datasets: [
      {
        label: 'All Users',
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#4d7cff',
        backgroundColor: '#4d7cff',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Registered Users',
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#42c686',
        backgroundColor: '#42c686',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Anonymous Users',
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#ff5b57',
        backgroundColor: '#ff5b57',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  // Chart options for the Line chart
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 0.01,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h2>Overview Dashboard</h2>

      {/* Top Metrics Section */}
      <div className="metrics-container">
        <div className="metric-card green">
          <p>Articles</p>
          <h3>1</h3>
        </div>
        <div className="metric-card">
          <p>Likes</p>
          <h3>0</h3>
        </div>
        <div className="metric-card">
          <p>Dislikes</p>
          <h3>0</h3>
        </div>
        <div className="metric-card">
          <p>Feedback</p>
          <h3>0</h3>
        </div>
        <div className="metric-card">
          <p>Article Usage</p>
          <h3>0</h3>
        </div>
      </div>

      {/* Keyword Search Stats */}
      <div className="keyword-search-stats">
        <h3>
          Keyword Search Stats <span className="info-icon">ℹ️</span>
        </h3>
        <div className="stats-container">
          <div className="chart-section">
            <Doughnut data={doughnutData} />
          </div>
          <div className="stats-metrics">
            <div className="metric">
              <p className="metric-title">Popular</p>
              <p className="metric-value">0.00%</p>
            </div>
            <div className="metric">
              <p className="metric-title">Failed</p>
              <p className="metric-value">0.00%</p>
            </div>
          </div>
          <div className="no-keywords">
            <p className="no-keywords-text">No keywords to display.</p>
            <div className="magnifier-icon">🔍</div>
          </div>
        </div>
      </div>

      {/* Article Views */}
      <div className="article-views-container">
        <h4>Article Views</h4>
        <div className="article-views-stats">
          <div className="metric">
            <p>All Users</p>
            <h3>0</h3>
          </div>
          <div className="metric">
            <p>Registered Users</p>
            <h3>0</h3>
          </div>
          <div className="metric">
            <p>Anonymous Users</p>
            <h3>0</h3>
          </div>
        </div>
        <div className="chart-container">
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>

      {/* Likes/Dislikes of Registered Users */}
      <div className="section-container">
        <h3>Likes/Dislikes of Registered Users</h3>
        <div className="stats-container">
          <div className="metric">
            <p className="metric-title">Reacted Users</p>
            <p className="metric-value">0</p>
          </div>
          <div className="chart-placeholder">
            <p>Chart showing likes/dislikes over time.</p>
          </div>
        </div>
      </div>

      {/* Article Usage Metrics */}
      <div className="section-container">
        <h3>Article Usage Metrics</h3>
        <div className="stats-container">
          <div className="metric">
            <p className="metric-title">Articles</p>
            <p className="metric-value">0</p>
          </div>
          <div className="metric">
            <p className="metric-title">Tickets</p>
            <p className="metric-value">1</p>
          </div>
        </div>
      </div>

      {/* Most Referenced Articles */}
      <div className="section-container">
        <h3>Most Referenced Articles</h3>
        <div className="stats-container">
          <p className="no-articles-text">No Articles to display.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
