interface CommunityItemListProps {
    id: number;
    content: string;
    createdAt: string;
    img01: string;
    member: CommunityItemListMemberProps;
    boardComment: CommunityItemListBoardCommentProps;
};

interface CommunityItemListBoardCommentProps {
    id: number,
    comment: string,
    member: CommunityItemListMemberProps,
}

interface CommunityItemListMemberProps {
    id: number;
    // name: string;
    nick: string;
    profileImg: string;
    role: string;
}
