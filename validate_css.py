
import re

def validate_css(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    brace_count = 0
    for i, line in enumerate(lines):
        # Remove comments for simple checking
        line = re.sub(r'/\*.*?\*/', '', line)
        for char in line:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
        
        if brace_count < 0:
            print(f"Error: Unexpected closing brace at line {i+1}")
            return

    if brace_count != 0:
        print(f"Error: Unbalanced braces. Final count: {brace_count} (positive means missing closing brace)")
    else:
        print("CSS braces seem balanced.")

validate_css('assets/css/style.css')
