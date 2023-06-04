#include "pishtov.h"
#include <iostream>
#include <stdint.h>
#include <time.h>
#include <vector>

using namespace std;

float x = 470, y = 260;
long long lastPatron = 0;

class Patron {
public:
    long long x;
    long long y;
    long long speed;

    Patron(long long x, long long y, long long speed) {
        this->x = x;
        this->y = y;
        this->speed = speed;
    }
};

vector<Patron> patrons;

void init() {

}

void update() {
    x = mouse_x - 15;
    y = mouse_y - 15;

    for(int i = 0; i < lastPatron; i++) {
        patrons[i].x += patrons[i].speed;
    }

    patrons.push_back(Patron(x, y, 1));
    lastPatron++;

    cout << lastPatron << endl;
}

void draw() {
    fill_rect(x, y, 30, 30);

    for(int i = 0; i < lastPatron; i++) {
        fill_color(0xff0000);
        fill_rect(patrons[i].x, patrons[i].y, 10, 5);
    }
}

void keydown(int key) {

}

void keyup(int key) {

}

void mousedown(int button) {
    patrons.push_back(Patron(x, y, 1));
    lastPatron++;
}

void mouseup(int button) {

}
