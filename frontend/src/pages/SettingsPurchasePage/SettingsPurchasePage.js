import React from 'react'

import "../FeedPage/settings.css";
import './temp.css'

function SettingsPurchasePage() {
  return (
    <div className="settingsPage">
      <div class="file-area">
          <input type="file" multiple/>
          <div class="file-dummy">
              <span class="default">Click to select a file, or drag it here</span>
              <span class="success">Great, your file is selected</span>
          </div>
      </div>
    </div>
  )
}

export default SettingsPurchasePage