CREATE TRIGGER decreaseCommentCount_trigger AFTER DELETE ON comment
FOR EACH ROW  EXECUTE PROCEDURE decreaseCommentCount();

CREATE OR REPLACE FUNCTION decreaseCommentCount() RETURNS TRIGGER AS $decreaseCommentCount_trigger$
BEGIN 
UPDATE post SET "commentCount" = "commentCount" - 1 WHERE post."postId" = NEW."postId";
RETURN NEW;
END;
$decreaseCommentCount_trigger$ LANGUAGE plpgsql;




SELECT * from post;
SELECT * from comment;

INSERT INTO "comment"("postId","userId","description") VALUES (10,1,'This NFT is going to be a game changer');