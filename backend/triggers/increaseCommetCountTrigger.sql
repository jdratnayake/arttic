CREATE TRIGGER increaseCommentCount_trigger AFTER INSERT ON comment
FOR EACH ROW  EXECUTE PROCEDURE increaseCommentCount();

CREATE OR REPLACE FUNCTION increaseCommentCount() RETURNS TRIGGER AS $increaseCommentCount_trigger$
BEGIN 
UPDATE post SET "commentCount" = "commentCount" + 1 WHERE post."postId" = NEW."postId";
RETURN NEW;
END;
$increaseCommentCount_trigger$ LANGUAGE plpgsql;




SELECT * from post;
SELECT * from comment;

INSERT INTO "comment"("postId","userId","description") VALUES (10,1,'This NFT is going to be a game changer');