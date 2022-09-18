---
layout: post
title: Comparing Files
tags: linux
comments: true
---

# Comparing Files

Sometimes you run into an issue requiring the inspection and comparison of two files which should contain matching data, but are unexpectedly out by a few bytes here or there. Through a text editor the files can visually look the same, but michmatching line endings between operating systems, or the presense of hidden End of File characters can cause us issues.

### File Size

The first thing I'll start with to get an idea of the size of the problem at hand will be a simple `ls -l file1 file2`. This will display the total bytes contained in each file, and can indicate the level of descrepency between the files.

### Direct Comparison

After that it makes sense to directly compare the two files for mismatching characters. A simple way of doing this is by using the **cmp** GNU tool:

`cmp -l file1 file2` 

### File Inspection

Using the GNU tool **od** we can directly inspect the characters of a file, potentially aiding us in spotting unexpected characters:

`od -c file`

