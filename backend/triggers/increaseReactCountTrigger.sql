CREATE TRIGGER increaseReactCount_trigger AFTER INSERT ON "postReaction"
FOR EACH ROW  EXECUTE PROCEDURE increaseReactCount();

CREATE OR REPLACE FUNCTION increaseReactCount() RETURNS TRIGGER AS $increaseReactCount_trigger$
BEGIN 
UPDATE post SET "reactCount" = "reactCount" + 1 WHERE post."postId" = NEW."postId";
RETURN NEW;
END;
$increaseReactCount_trigger$ LANGUAGE plpgsql;


SELECT * from post;

SELECT * from "comment";
SELECT * from "commentReaction";