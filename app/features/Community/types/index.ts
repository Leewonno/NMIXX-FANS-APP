interface CommunityItemProps {
    id: number;
    content: string;
    createdAt: string;
    img01: string;
    img02: string;
    img03: string;
    img04: string;
    img05: string;
    member: MemberProps;
    boardComments: BoardCommentProps[];
    like: number;
    isLiked: boolean;
};

interface CommunityItemPopularListProps {
    id: number;
    content: string;
    createdAt: string;
    member: MemberProps;
    like: number;
};

interface CommunityItemListProps {
    id: number;
    content: string;
    createdAt: string;
    img01: string;
    member: MemberProps;
    boardComment: BoardCommentProps;
    isLiked: boolean;
    like: number;
};

interface BoardCommentProps {
    id: number,
    comment: string,
    member: MemberProps,
}

interface MemberProps {
    id: number;
    // name: string;
    nick: string;
    profileImg: string;
    role: string;
}
