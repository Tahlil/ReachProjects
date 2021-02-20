'reach 0.1';

const Player =
{
    getHand: Fun([], UInt),
    seeOutcome: Fun([UInt], Null)
};

export const main =
    Reach.App(
        {},
        [['Alice', Player], ['Bob', Player]],
        (A, B) => {
            A.only(() => {
                const handA = declassify(interact.getHand());
            });
            A.publish(handA);
            commit();
            exit();
        });