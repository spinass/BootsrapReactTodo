import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info">
          Visi
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Aktyvus
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Baigta
        </button>
      </div>
    );
  }
}
