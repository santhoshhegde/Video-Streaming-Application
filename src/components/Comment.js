import React from "react";
import userLogo from "../Icons/userLogo.svg";

function Comment({ data }) {
  const { name, description } = data;
  return (
    <div>
      <div className="flex gap-4 bg-gray-200 rounded-lg p-2 mt-5 border-l-2">
        <img src={userLogo} alt="userIcon" width={50} height={30} />
        <div>
          <h1>{name}</h1>
          <h2>{description}</h2>
        </div>
      </div>
    </div>
  );
}

const CommentList = ({ data }) => {
  return (
    <div>
      {data.map((item, ind) => (
        <div key={ind}>
          <Comment data={item} />
          <div className="ml-4 pl-5 border-l-2">
            <CommentList data={item.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = ({ data }) => {
  return (
    <div>
      <h1>Comments:</h1>
      <CommentList data={data} />
    </div>
  );
};

export default CommentsContainer;
