#!/bin/bash
# Usage: bash auto_commit.sh

set -e

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$REPO_DIR"


ORIG_LOG=$(cat readme.log)
TMP_README=README_TMP.md
cp Readme.md "$TMP_README"

for DAY in {16..30}
do
    DAY_NUM=$(echo "$DAY - 15" | bc)
    DAY_NUM=$(printf "%02d" "$DAY_NUM")
    DAY_FILE="src/Day${DAY}.ts"
    README_LOG="readme.log"
    README_MD="Readme.md"

    # 取得 readme.log 第 N 行內容
    # echo "Processing Day $DAY_NUM..."
    # echo "$ORIG_LOG" | sed -n "${DAY_NUM}p"
    LOG_LINE=$(echo "$ORIG_LOG" | sed -n "${DAY_NUM}p")
    # echo "$LOG_LINE"
    # 將該行內容加到 Readme.md 最後一行（只加一行）
    cp "$TMP_README" "$README_MD"
    # echo "$LOG_LINE"
    echo "$LOG_LINE" >> "$README_MD"
    cp "$README_MD" "$TMP_README"

    # 只保留前 N 行到 readme.log
    echo "$ORIG_LOG" | head -n $DAY_NUM > "$README_LOG"

    # git add src/DayXX.ts、Readme.md、readme.log
    git add "$DAY_FILE" "$README_MD"

    # git commit
    git commit -m "Day $DAY"
    # break 
done

mv "$TMP_README" Readme.md
echo "$ORIG_LOG" > readme.log  # 還原 readme.log

echo "All commits from Day16 to Day30 are done!"