import React from "react";

export default ({ createdAt, FromFirstName, ToFirstName, body, sent }) => {
  return (
    <li className="clearfix">
      <div className={`message-data ${sent ? "" : "align-right"}`}>
        {/* TODO use moment to get time in `10:10 AM, Today` shape */}
        <span className="message-data-time">{createdAt}</span> &nbsp; &nbsp;
        <span className="message-data-name">
          {sent ? FromFirstName : ToFirstName}
        </span>
        <i className={`fa fa-circle ${sent ? "me" : ""}`} />
      </div>
      <div
        className={`message ${
          sent ? "my-message" : "other-message float-right"
        }`}
      >
        {body}
      </div>
    </li>
  );
};
