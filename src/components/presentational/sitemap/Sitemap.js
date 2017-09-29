import React from 'react';
import {} from './styles';

export default function Sitemap() {
  return (
    <div className="sitemap_container">
      <div className="sitemap">
        <article className="sitemap_regional">
          <select>
            <option value="english">English</option>
          </select>
          <select>
            <option value="GBP">GBP</option>
          </select>
        </article>
        <article className="sitemap_lists">
          <h4><b>Airbnb</b></h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Policies</li>
            <li>Help</li>
            <li>Diversity &amp; Belonging</li>
          </ul>
        </article>
        <article className="sitemap_lists">
          <h4><b>Discover</b></h4>
          <ul>
            <li>Trust and Safety</li>
            <li>Travel Credit</li>
            <li>Airbnb Citzen</li>
            <li>Business Travel</li>
            <li>Guidebooks</li>
            <li>Airbnb Mag</li>
          </ul>
        </article>
        <article className="sitemap_lists">
          <h4><b>Hosting</b></h4>
          <ul>
            <li>Why Host</li>
            <li>Hospitality</li>
            <li>Responsible Hosting</li>
            <li>Community Center </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
