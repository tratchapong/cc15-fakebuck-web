import Avatar from '../../components/Avatar';
import CoverImage from './CoverImage';
import PictureForm from './PictureForm';
import { useAuth } from '../../hooks/use-auth';

export default function EditProfileForm() {
  const { authUser } = useAuth();

  const uploadProfileImage = input => {
    console.log(input);
  };

  const uploadCoverImage = input => {
    console.log(input);
  };

  return (
    <div className="flex flex-col gap-4">
      <PictureForm
        title="Profile picture"
        initialSrc={authUser.profileImage}
        onSave={uploadProfileImage}
      >
        {(src, onClick) => (
          <div onClick={onClick}>
            <Avatar className="h-40" src={src} />
          </div>
        )}
      </PictureForm>
      <PictureForm
        title="Cover photo"
        initialSrc={authUser.coverImage}
        onSave={uploadCoverImage}
      >
        {(src, onClick) => (
          <div
            className="aspect-[3/1] overflow-hidden rounded-md flex items-center justify-center"
            onClick={onClick}
          >
            <CoverImage src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  );
}
