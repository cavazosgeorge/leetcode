/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    return dfs(root, Number.NEGATIVE_INFINITY);
};

const dfs = (root, max_sofar) => {
    if (!root) return 0;
    let total = 0;
    
    if (root.val >= max_sofar) total++;
    // max_so far for child node is the larger of previous max and current node val
    total += dfs(root.left, Math.max(max_sofar, root.val));
    total += dfs(root.right, Math.max(max_sofar, root.val));
    
    return total;
}