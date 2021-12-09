import { VFC } from "react";
import { USerProfile } from "../types/UserProfile";

type Props = {
  user: USerProfile;
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <div>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
        <dt></dt>
        <dd></dd>
      </dl>
    </div>
  );
};
