// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.
import React from "react";
import ReactDOM from "react-dom";

export const StyledSelect = React.createClass({
  propTypes: {
    selectValue: React.PropTypes.string.isRequired,
    selectId: React.PropTypes.string.isRequired,
    selectChange: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
      <div className="styled-select">
        <label htmlFor={this.props.selectId}>
          <i className="fonticon-down-dir styled-select-icon"></i>
          <i className="fonticon-down-dir styled-select-hover-icon"></i>
          <select
            value={this.props.selectValue}
            id={this.props.selectId}
            className={this.props.selectValue}
            onChange={this.props.selectChange}
          >
            {this.props.selectContent}
          </select>
        </label>
      </div>
    );
  }
});
