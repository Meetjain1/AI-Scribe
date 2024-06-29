/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import ViewStoryModal from "../Modal/ViewStory";
import { useState } from "react";
import { ShareModal } from "../Modal/ShareModal";

export function Story(props) {
  const { story, option } = props;

  const [open, setOpen] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenShareModal = () => {
    setOpenShareModal(!openShareModal);
  };

  return (
    <Card className="mt-6 rounded-md w-96 mx-4 text-slate-600 shadow-md  dark:bg-[#1E293B] dark:text-white">
      <CardBody className="pb-3">
        <Typography
          className="mb-2 dark:text-[#3BBCF6]"
          variant="h5"
          color="blue-gray"
        >
          {story.storyName
            ? story.storyName.slice(0, 26) + "..."
            : "Story Generated by AI Scribe"}
        </Typography>
        <Typography>
          {story.story ? story.story.slice(0, 190) + "..." : ""}
        </Typography>
      </CardBody>
      {option === "view" ? (
        <CardFooter className="flex items-center justify-between px-7 py-4">
          <div className="flex items-center">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src={`https://api.multiavatar.com/${story.userId.userName}.png`}
              className="border-2 border-white hover:z-10"
            />
            <Typography className="font-bold mx-3">
              {story.userId.userName}
            </Typography>
          </div>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal dark:text-[#bfc9d3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            {story.rating}.0
          </Typography>
        </CardFooter>
      ) : (
        <Rating className="w-5 h-5 mx-6 my-3" readonly value={story.rating} />
      )}
      <CardFooter className="md:mx-0 pt-2 flex justify-between">
        <Button
          onClick={handleOpen}
          className="bg-[#3aa788] tracking-wider"
          size="md"
        >
          Read
        </Button>
        <Button
          onClick={handleOpenShareModal}
          className="bg-[#3aa788]"
          size="sm"
        >
          Share
        </Button>
      </CardFooter>
      <ViewStoryModal
        option={option}
        selectedStory={story}
        open={open}
        handleOpen={handleOpen}
      />
      <ShareModal
        title={story.storyName}
        description={story.story.slice(0, 500)}
        open={openShareModal}
        handleOpen={handleOpenShareModal}
      />
    </Card>
  );
}
