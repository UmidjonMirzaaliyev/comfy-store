import { useNavigation } from "react-router-dom";

function SubmitBtn({ text }) {
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";
  return (
    <button 
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmiting}
    >
      {isSubmiting ? (
        <>
          <span className=" loading loading-spinner"></span>sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
}

export default SubmitBtn;
