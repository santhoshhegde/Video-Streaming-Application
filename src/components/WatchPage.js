import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./Comment";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import LiveComment from "./LiveComment";

const WatchPage = () => {
  const [searchParmas] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const data = [
    {
      name: "user1",
      description: "Lorem ipsum dolor sit amet consectetur",
      replies: [
        {
          name: "user1",
          description: "TESTING",
          replies: [
            {
              name: "user1",
              description: "Lorem ipsum dolor sit amet consectetur",
              replies: [
                {
                  name: "user1",
                  description: "TESTING",
                  replies: [
                    {
                      name: "user1",
                      description: "TESTING",
                      replies: [
                        {
                          name: "user1",
                          description: "TESTING",
                          replies: [
                            {
                              name: "user1",
                              description: "TESTING",
                              replies: [
                                {
                                  name: "user1",
                                  description: "TESTING",
                                  replies: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "user1",
                  description: "Lorem ipsum dolor sit amet consectetur",
                  replies: [],
                },
                {
                  name: "user1",
                  description: "Lorem ipsum dolor sit amet consectetur",
                  replies: [],
                },
                {
                  name: "user1",
                  description: "Lorem ipsum dolor sit amet consectetur",
                  replies: [],
                },
                {
                  name: "user1",
                  description: "Lorem ipsum dolor sit amet consectetur",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "user1",
          description: "Lorem ipsum dolor sit amet consectetur",
          replies: [],
        },
        {
          name: "user1",
          description: "Lorem ipsum dolor sit amet consectetur",
          replies: [],
        },
        {
          name: "user1",
          description: "Lorem ipsum dolor sit amet consectetur",
          replies: [],
        },
        {
          name: "user1",
          description: "Lorem ipsum dolor sit amet consectetur",
          replies: [],
        },
      ],
    },
    {
      name: "user1",
      description: "Lorem ipsum dolor sit amet consectetur",
      replies: [],
    },
    {
      name: "user1",
      description: "Lorem ipsum dolor sit amet consectetur",
      replies: [],
    },
    {
      name: "user1",
      description: "Lorem ipsum dolor sit amet consectetur",
      replies: [],
    },
    {
      name: "user1",
      description: "Lorem ipsum dolor sit amet consectetur",
      replies: [
        {
          name: "user1",
          description: "TESTING",
          replies: [],
        },
        {
          name: "user1",
          description: "Lorem ipsum dolor sit amet consectetur",
          replies: [],
        },
        {
          name: "user1",
          description: "Lorem ipsum dolor sit amet consectetur",
          replies: [],
        },
        {
          name: "user1",
          description: "Lorem ipsum dolor sit amet consectetur",
          replies: [],
        },
        {
          name: "user1",
          description: "Lorem ipsum dolor sit amet consectetur",
          replies: [],
        },
      ],
    },
  ];
  return (
    <div className="flex gap-5">
      <div className="ml-28">
        <iframe
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${searchParmas.get(
            "v"
          )}?si=G3EfWFhbAK4P6A-s`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <CommentsContainer data={data} />
      </div>
      <LiveComment name={"Ak"} comment={"Lorem ipsum"} />
    </div>
  );
};

export default WatchPage;
