import Modal from "@/components/global/Modal";
import FullImage from "./FullImage";

interface RecipeImageProps {
  image: string;
  recipeName: string;
}

function RecipeImage({ image, recipeName }: RecipeImageProps) {
  return (
    <div className="mb-2 w-full">
      <Modal>
        <Modal.Open opens="recipe-image">
          <button className="recipe-view-clip relative z-20 flex aspect-[3/1] h-full w-full items-center justify-center overflow-hidden  rounded-2xl px-12 py-4 [&:focus>div]:scale-110 [&:hover>div]:scale-110">
            <div
              className="absolute left-0 top-0 z-10 h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-150 ease-linear"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(85, 85, 85, 0.9) 0%, rgba(85, 85, 85, 0.4) 50%, rgba(85, 85, 85, 0.5) 100%), url(${image})`,
              }}
            ></div>
            <h1 className="z-20 font-kalam text-6xl font-bold text-white-tint">
              {recipeName}
            </h1>
          </button>
        </Modal.Open>
        <Modal.Window name="recipe-image">
          <FullImage onCloseModal={() => {}} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default RecipeImage;
